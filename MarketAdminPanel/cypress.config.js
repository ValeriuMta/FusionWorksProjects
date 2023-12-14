const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'mz5bcb',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
  viewportWidth: 1500,
  viewportHeight: 1100,

});

