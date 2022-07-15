import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import chromedriver from 'chromedriver';
import {Test_env_page} from "../../../../../src/com/epam/healenium/selenium/page_object/test_env/test_env_page.js";
import {Locator_type} from "../../../../../src/com/epam/healenium/selenium/strategy/locator_type.js";
import {Callback_page} from "../../../../../src/com/epam/healenium/selenium/page_object/callback_page.js";

// Total count of tests = 9
describe('Tests healing locators using different CSS selectors', function () {
    let driver;
    let testEnv;
    let callBack;
    beforeEach(async function () {
        let opts = new chrome.Options();
        opts.addArguments('--no-sandbox')
        opts.addArguments('--disable-dev-shm-usage')
        driver = await new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .usingServer('http://localhost:8085')
            .setChromeOptions(opts)
            .build();

        testEnv = await new Test_env_page(driver);
        callBack = await new Callback_page(driver);
    })

    afterEach(async function () {
        await driver.quit();
    })

    it('CSS Attribute - Healing locators _1', async function () {
        await callBack.open();

        await callBack.clickAddSquareButton();
        expect(await callBack.verifySquareElement()).toBe(true);

        await callBack.clickUpdateSquareButton();
        expect(await callBack.verifySquareElement()).toBe(true);
    })

    it('CSS Id - Healing locators _2', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.Css, "#change_id", "HLM_Css_#2");
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.Css, "#change_id", "HLM_Css_#2");
    })

    it('CSS Element - Healing locators _3', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.Css, "test_tag", "HLM_Css_#3");
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.Css, "test_tag", "HLM_Css_#3");
    })

    it('CSS Disabled - Healing locators _4', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.Css, "input:disabled", "HLM_Css_#4");
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.Css, "input:disabled", "HLM_Css_#4");
    })

    it('CSS Enabled - Healing locators _5', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.Css, "textarea:enabled", "HLM_Css_#5");
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.Css, "textarea:enabled", "HLM_Css_#5");
    })

    it('CSS Checked - Healing locators _6', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.Css, "input:checked", "HLM_Css_#6");
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.Css, "input:checked", "HLM_Css_#6");
    })

    it('CSS Hover - Healing locators _7', async function () {
        //TO DO
    })

    it('CSS ClassName - Healing locators _8', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.Css, ".test_class", "HLM_Css_#8");
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.Css, ".test_class", "HLM_Css_#8");
    })

    it('CSS Id Special Character - Healing locators _9', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.Css, "input#change\\:name", "HLM_Css_#9");
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.Css, "input#change\\:name", "HLM_Css_#9");
    })
})