import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import chromedriver from 'chromedriver';
import {Test_env_page} from "../../../../../src/com/epam/healenium/selenium/page_object/test_env/test_env_page.js";
import {Locator_type} from "../../../../../src/com/epam/healenium/selenium/strategy/locator_type.js";

// Total count of tests = 6
describe('Tests healing locators using different semantic locators', function () {
    var driver;
    let testEnv;
    beforeAll(async function () {
        driver = await new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
        await driver.manage().window().maximize();

        testEnv = await new Test_env_page(driver);
        // let opts = new chrome.Options();
        // opts.addArguments('no-sandbox')
        // driver = await new webdriver.Builder()
        //     .withCapabilities(webdriver.Capabilities.chrome())
        //     .usingServer('http://localhost:8085')
        //     .setChromeOptions(opts)
        //     .build();
    })

    afterAll(async function () {
        await driver.quit();
    })

    it('Find element by Id - Healing locators _1', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.Id, 'change_id', 'HLM_Semantic_#1');
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.Id, 'change_id', 'HLM_Semantic_#1');
    })

    it('Find element by ClassName - Healing locators _2', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.ClassName, 'test_class', 'HLM_Semantic_#2');
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.ClassName, 'test_class', 'HLM_Semantic_#2');
    })

    it('Find element by LinkText - Healing locators _3', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.LinkText, 'Change: LinkText, PartialLinkText', 'HLM_Semantic_#3');
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.LinkText, 'Change: LinkText, PartialLinkText', 'HLM_Semantic_#3');
    })

    it('Find element by Name - Healing locators _4', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.Name, 'change_name', 'HLM_Semantic_#4');
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.Name, 'change_name', 'HLM_Semantic_#4');
    })

    it('Find element by PartialLinkText - Healing locators _5', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.PartialLinkText, 'PartialLinkText', 'HLM_Semantic_#5');
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.PartialLinkText, 'PartialLinkText', 'HLM_Semantic_#5');
    })

    it('Find element by TagName - Healing locators _6', async function () {
        await testEnv.open();

        await testEnv.fillTestElement(Locator_type.TagName, 'test_tag', 'HLM_Semantic_#6');
        await testEnv.clickSubmitButton();
        await testEnv.fillTestElement(Locator_type.TagName, 'test_tag', 'HLM_Semantic_#6');
    })
})