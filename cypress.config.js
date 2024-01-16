const { defineConfig } = require("cypress");

// npx cypress run --spec cypress\e2e\Practise\TestFramework\File1.js  --headed --browser "chrome" --env url="https://rahulshettyacademy.com"
// command to run cypress with dynamic url at run time
module.exports = defineConfig({

    screenshotsFolder: 'cypress/screenshots',
    defaultCommandTimeout: 6000,  // this is global wait for the project
    env:{

      url:'https://rahulshettyacademy.com'
    },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.js'
  },
});
