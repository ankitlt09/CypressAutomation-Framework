const { defineConfig } = require("cypress");

// npx cypress run --spec cypress\e2e\Practise\TestFramework\File1.js  --headed --browser "chrome" --env url="https://rahulshettyacademy.com"
// command to run cypress with dynamic url at run time
module.exports = defineConfig({
    projectId: "jv4hb2",
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: true,
      html: true,
      json: true,
      charts: true,
      reportFilename: "[status]_[datetime]-[name]-report",
      timestamp: "longDate",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    defaultCommandTimeout: 6000,  // this is global wait for the project
    env:{

      url:'https://rahulshettyacademy.com'
    },
    // to rerun code if it fails
    retries: {
      runMode: 1
      // openMode: 0,
      },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.js'
  },
});
