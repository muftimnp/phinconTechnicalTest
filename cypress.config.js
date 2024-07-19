const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3ugm16",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
