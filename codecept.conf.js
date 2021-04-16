exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://demoqa.com',
      browser: 'chrome'
      
   
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'test1',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
  }
}
}