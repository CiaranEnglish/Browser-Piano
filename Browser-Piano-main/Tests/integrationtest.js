const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome'); //Use 'node integrationtest.js chrome' to run
const firefox = require('selenium-webdriver/firefox'); //Use 'node integrationtest.js firefox' to run

async function runTest() {
  let driver;
  if (process.argv[2] === 'chrome') {
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options().headless())
      .build();
  } else {
    driver = await new Builder()
      .forBrowser('firefox')
      .build();
  }

  try {
    await driver.get('http://localhost:3000');
    await driver.wait(until.titleIs('Your App Title'), 1000);
    console.log('Test passed');
  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    await driver.quit();
  }
}

runTest();