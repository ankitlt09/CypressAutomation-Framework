const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

// npx cypress run --spec cypress\e2e\Practise\TestFramework\File1.js  --headed --browser chrome --env url="https://rahulshettyacademy.com"
// command to run cypress with dynamic url at run time
module.exports = defineConfig({
    projectId: "jv4hb2",
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      title: 'Automation Report',
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
    setupNodeEvents,  // to make the code look clean
    specPattern: 'cypress/e2e/'
  },
});
