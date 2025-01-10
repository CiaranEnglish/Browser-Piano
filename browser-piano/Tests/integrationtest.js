const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

async function runTest() {
    let driver;
    if (process.argv[2] === 'chrome') {
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome.Options().addArguments('--headless'))
            .build();
    } else {
        driver = await new Builder()
            .forBrowser('firefox')
            .build();
    }

    try {
        // Navigate to the app
        await driver.get('http://localhost:3000');
        await driver.wait(until.titleIs('Your App Title'), 1000);

        // Navigate to the piano page
        await driver.findElement(By.css('a[href="/home"]')).click();
        await driver.wait(until.urlIs('http://localhost:3000/home'), 1000);

        console.log('Test to navigate to piano passed');

        // Test theme change
        await driver.findElement(By.css('button')).click(); // Open dropdown
        const themeOption = await driver.findElement(By.xpath("//li[contains(text(),'Christmas')]"));
        await themeOption.click();
        console.log('Test to change theme passed');

        // Test effects toggle
        const reverbButton = await driver.findElement(By.xpath("//button[contains(text(),'Enable Reverb')]"));
        await reverbButton.click();
        console.log('Test if reverb enabled passed');

        // Test playing a note with a keypress
        await driver.actions().sendKeys('a').perform(); // Simulate pressing "a"
        console.log('Test for key press passed');

        // Navigate to signup page and back
        await driver.findElement(By.css('a[href="/signup"]')).click();
        await driver.wait(until.urlIs('http://localhost:3000/signup'), 1000);
        console.log('Test to signup page passed');

        await driver.findElement(By.css('a[href="/home"]')).click();
        await driver.wait(until.urlIs('http://localhost:3000/home'), 1000);
        console.log('Test to piano page passed');

    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        await driver.quit();
    }
}

runTest();
