import { defineConfig } from 'cypress';

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://stg-connect.medipass.io',
    defaultCommandTimeout: 10000,
  },
});
