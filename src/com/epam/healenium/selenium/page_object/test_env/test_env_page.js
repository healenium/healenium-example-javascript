import {By} from "selenium-webdriver";
import "chromedriver"
import {Strategy, StrategyManager} from "../../strategy/strategy.js";
import {Base_page} from "../base_page.js";

class Test_env_page extends Base_page {
    testPage = "https://elenastepuro.github.io/test_env/index.html";

    submitButton = By.id("Submit");

    constructor(proxyDriver) {
        super(proxyDriver);
    }

    async open() {
        await this.driver.get(this.testPage);
        return this;
    }

    async clickSubmitButton() {
        await this.driver.findElement(this.submitButton).click();
        return this;
    }

    async fillTestElement(type, locator, text) {
        this.healLocator = await new StrategyManager();
        this.testType = await new Strategy(type, this.driver);
        this.healLocator.setStrategy(this.testType);

        await this.healLocator.getStrategy().doAction(locator, text);
    }
}

export {Test_env_page};