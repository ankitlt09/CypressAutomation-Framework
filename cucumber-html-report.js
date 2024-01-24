const report = require("multiple-cucumber-html-reporter");
const moment = require("moment");

report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "cypress/cucumberReports/cucumber-html-report.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "120",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Cypress Automation" },
      { label: "Dev", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value:moment().format("MMMM Do YYYY, h:mm:ss a")},
      { label: "Execution End Time", value: moment().format("MMMM Do YYYY, h:mm:ss a") },
    ],
  },
});