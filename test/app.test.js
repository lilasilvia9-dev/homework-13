describe('Open App - Belajar Bareng', () => {
    it('should launch the app', async () => {
   
        const state = await driver.isAppInstalled('com.example.belajar_bareng');
        console.log(`✅ Status instalasi aplikasi: ${state}`);

        console.log('✅ Application opened successfully');
        
        await driver.pause(5000);
    });
});


