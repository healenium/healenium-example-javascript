import webdriver, {By, until} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import {Test_env_page} from "../../../../../src/com/epam/healenium/selenium/page_object/test_env/test_env_page.js";
import {Locator_type} from "../../../../../src/com/epam/healenium/selenium/strategy/locator_type.js";

describe('Wait Tests - Conditional wait for simple locator', function () {
    let driver;
    let testEnv;
    var originalTimeout;

    beforeAll(async function () {
        driver = await new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.firefox())
            .usingServer('http://localhost:8085')
            .build();

        testEnv = await new Test_env_page(driver);
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 12000;
    })

    it('Wait element without healing', async function () {
        await testEnv.open();

        await testEnv.clickButton(By.id("Wait_Submit"));
        await testEnv.executeScript("disable_healing_true");
        let element = await driver.wait(until.elementLocated(By.id("wait_new_element")), 10000);
        await testEnv.executeScript("disable_healing_false");
        let placeholder = await element.getAttribute("placeholder");
        expect("Wait input").toBe(placeholder);
    })

    afterAll(async function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        await driver.quit();
    })
})