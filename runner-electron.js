const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

cypress.run({
  // specs to run here
  browser: 'electron'
})
.then((results) => {
  const args = {
    target: process.env.TARGET_TOKEN_ELECTROM,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
