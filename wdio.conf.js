exports.config = {
  runner: "local",

  hostname: "127.0.0.1",
  port: 4723,
  path: "/",

  specs: ["./test/**/*.js"],

  maxInstances: 1,

  capabilities: [
    {
      platformName: "Android",
      "appium:automationName": "UiAutomator2",
      "appium:deviceName": "Android Emulator",
      
      "appium:app": "C:\\Users\\Hype\\Downloads\\app-release.apk",
      
      "appium:appPackage": "com.example.belajar_bareng",
      "appium:appActivity": "com.example.belajar_bareng.MainActivity",

      "appium:noReset": false,
      "appium:autoGrantPermissions": true,
    },
  ],

  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
      },
    ],
  ],
  mochaOpts: {
    timeout: 60000,
  },
};