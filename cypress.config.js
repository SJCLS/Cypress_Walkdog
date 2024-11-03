const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://walkdog.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
