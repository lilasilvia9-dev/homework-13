describe('Skenario Login & Buat Postingan - Belajar Bareng', () => {

    it('Berhasil Login dan Posting', async () => {
        
        const isInstalled = await driver.isAppInstalled('com.example.belajar_bareng');
        console.log(`✅ Status instalasi aplikasi: ${isInstalled}`);

        const emailInput = await $('//android.widget.EditText[contains(@text, "Masukkan Email") or @resource-id="email_input"]');
        const passwordInput = await $('//android.widget.EditText[contains(@text, "Masukkan Password") or @resource-id="password_input"]');
        const loginBtn = await $('//*[contains(@content-desc, "Login") or contains(@text, "Login")]');

        // Input email
        await emailInput.waitForDisplayed({ timeout: 10000 });
        await emailInput.click();
        await emailInput.setValue('lilasilvia9@gmail.com');

        // Input password
        await passwordInput.waitForDisplayed({ timeout: 5000 });
        await passwordInput.click();
        await passwordInput.setValue('belajar');

        // Hide keyboard jika muncul
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }

        // Klik Tombol Login
        await loginBtn.waitForDisplayed({ timeout: 5000 });
        await loginBtn.click();

        // Verifikasi Berhasil Masuk ke Dashboard
        const postingBtn = await $('//*[contains(@content-desc, "Posting") or contains(@text, "Posting")]');

        await postingBtn.waitForDisplayed({ 
            timeout: 15000, 
            timeoutMsg: '❌ Login gagal! Masih tertahan di layar login.' 
        });

        await expect(postingBtn).toBeDisplayed();
        console.log('✅ Login berhasil dan masuk ke dashboard!');

        // Posting Teks
        const dynamicPostText = `testing-${Date.now()}`;
        const postInput = await $('//android.widget.EditText');
        await postInput.waitForDisplayed({ timeout: 5000 });
        await postInput.click();
        await postInput.setValue(dynamicPostText);

        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }

        await postingBtn.click();

        // Verifikasi Postingan Muncul
        const postResult = await $(`//*[contains(@content-desc, "${dynamicPostText}") or contains(@text, "${dynamicPostText}")]`); 
        await postResult.waitForDisplayed({ timeout: 10000 });
        await expect(postResult).toBeDisplayed();

        console.log(`✅ Berhasil membuat postingan: "${dynamicPostText}"`);
    });

});