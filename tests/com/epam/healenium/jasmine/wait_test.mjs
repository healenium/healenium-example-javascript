import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import { Test_env_page } from "../../../../../src/com/epam/healenium/selenium/page_object/test_env/test_env_page.js";
import { Locator_type } from "../../../../../src/com/epam/healenium/selenium/strategy/locator_type.js";

describe('Wait Tests - Conditional wait for simple locator', function () {
    let driver;
    let testEnv;
    var originalTimeout;

    beforeAll(async function () {
        let opts = new chrome.Options();
        opts.addArguments('--no-sandbox')
        opts.addArguments('--disable-dev-shm-usage')
        driver = await new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .usingServer('http://localhost:8085')
            .setChromeOptions(opts)
            .build();

        testEnv = await new Test_env_page(driver);
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 12000;
    })

    afterAll(async function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        await driver.quit();

    })


    it('Conditional wait for simple locator', async function () {
        await testEnv.open();
        await testEnv.fillTestElementByWait(Locator_type.Id, "change_wait", 10000);
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElementByWait(Locator_type.Id, "change_wait", 10000);
    })
})