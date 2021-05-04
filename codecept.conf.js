exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://automationpractice.com',
      browser: 'chrome',
      "restart": false
      
   
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,

  "mocha": {
    "reporterOptions": {
        "mochaFile": "output/result.xml"
    }
  },

    "mocha": {
    "reporterOptions": {
      "codeceptjs-cli-reporter": {
        "stdout": "-",
        "options": {
          "verbose": true,
          "steps": true,
        }
      },
      "mochawesome": {
       "stdout": "./output/console.log",
       "options": {
         "reportDir": "./output",
         "reportFilename": "report"
      },
      "mocha-junit-reporter": {
        "stdout": "./output/console.log",
        "options": {
          "mochaFile": "./output/result.xml",
          "attachments": true //add screenshot for a failed test
        }
      }
    }
  }
},
  
  
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
  },
  allure: {
    "enabled": true
  }
}
,
  
}
