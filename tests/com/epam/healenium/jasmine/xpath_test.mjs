import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import {Test_env_page} from "../../../../../src/com/epam/healenium/selenium/page_object/test_env/test_env_page.js";
import {Locator_type} from "../../../../../src/com/epam/healenium/selenium/strategy/locator_type.js";

// Total count of tests = 11
describe('Tests healing locators using different types of XPath', function () {

    let driver;
    let testEnv;
    beforeAll(async function () {
        let opts = new chrome.Options();
        opts.addArguments('no-sandbox')
        driver = await new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .usingServer('http://localhost:8085')
            .setChromeOptions(opts)
            .build();

        testEnv = await new Test_env_page(driver);
    })

    // afterAll(async function () {
    //     await driver.quit();
    // })

    it('XPath with special characters - Healing Locators _1', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.XPath, "//*[@id='change:name']", "HLM_XPath_#1");
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.XPath, "//*[@id='change:name']", "HLM_XPath_#1");
    })

    it('XPath Following - Healing Locators _2', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.XPath, "//*[@id='change_className']/following::test_tag", "HLM_XPath_#2");
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.XPath, "//*[@id='change_className']/following::test_tag", "HLM_XPath_#2");
    })

    it('XPath Contains - Healing Locators _3', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.XPath, "//input[contains(@class, 'test')]", "HLM_XPath_#3");
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.XPath, "//input[contains(@class, 'test')]", "HLM_XPath_#3");
    })

    it('XPath Following-Sibling - Healing Locators _4', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.XPath, '//*[starts-with(@class, "test")]/following-sibling::*', "HLM_XPath_#4");
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.XPath, '//*[starts-with(@class, "test")]/following-sibling::*', "HLM_XPath_#4");
    })

    it('XPath Ancestor:: - Healing Locators _5', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.XPath, "(//*[starts-with(@class, 'test')]/ancestor::div[@class='healenium-form validate-form']//input)[1]", "HLM_XPath_#5");
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.XPath, "(//*[starts-with(@class, 'test')]/ancestor::div[@class='healenium-form validate-form']//input)[1]", "HLM_XPath_#5");
    })

    it('XPath OR - Healing Locators _6', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.XPath, "//*[@id='change_id' or @id='omg']", "HLM_XPath_#6");
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.XPath, "//*[@id='change_id' or @id='omg']", "HLM_XPath_#6");
    })

    it('XPath And - Healing Locators _7', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.XPath, "//*[@id='change_id' and @type='text']", "HLM_XPath_#7");
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.XPath, "//*[@id='change_id' and @type='text']", "HLM_XPath_#7");
    })

    it('XPath Starts-with - Healing Locators _8', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.XPath, "//*[starts-with(@class, 'test')]", "HLM_XPath_#8");
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.XPath, "//*[starts-with(@class, 'test')]", "HLM_XPath_#8");
    })

    it('XPath Precending:: - Healing Locators _9', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.XPath, "//*[@id='change_className']/preceding::*[@id='change_id']", "HLM_XPath_#9");
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.XPath, "//*[@id='change_className']/preceding::*[@id='change_id']", "HLM_XPath_#9");
    })

    it('XPath Descendant:: - Healing Locators _10', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.XPath, "//*[@id='descendant_change']/descendant::input", "HLM_XPath_#10");
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.XPath, "//*[@id='descendant_change']/descendant::input", "HLM_XPath_#10");
    })

    it('XPath Hover - Healing Locators _11', async function () {

    })

    it('XPath Not Contains - Healing Locators _12', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.XPath, "//input[not(contains(@class, 'input1'))]", "HLM_XPath_#12");
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.XPath, "//input[not(contains(@class, 'input1'))]", "HLM_XPath_#12");
    });
})