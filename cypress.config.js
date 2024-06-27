const { defineConfig } = require("cypress");
//config for BDD
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify')

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);
  await preprocessor.addCucumberPreprocessorPlugin(on, config)

  on('file:preprocessor', browserify.default(config))
  return config
 
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'seleniumEasy',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    // specPattern: ['**/*.feature','**/*.cy.{js,jsz,ts,tsx}'] -this is if you want to see all but for BDD you only need feature
    specPattern: '**/*.feature',
    baseUrl:'https://demo.seleniumeasy.com/',
    viewportHeight: 960,
    viewportWidth: 1536,
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 150000,
    chromeWebSecurity: false, // this is because cypress discourages cross origin automation (javascript rule on the browser itself)
    watchForFileChanges:false, // this is to stop file changes while you are still working
    // retries:{// to rerun your test if any of it fails
    //   runMode: 1,
    //   openMode: 1
    // },
    setupNodeEvents,
  },
});


