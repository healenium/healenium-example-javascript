import {By} from "selenium-webdriver";
import {Base_page} from './base_page.js';
import "chromedriver"

class Callback_page extends Base_page {

    cycleCallbacks = "https://mdn.github.io/web-components-examples/life-cycle-callbacks/";

    addSquareButton = By.xpath("//button[contains(@class, 'add')]");
    updateSquareButton = By.xpath("//button[contains(@class, 'update')]");

    testButtonCss = By.css("[c='red']");

    constructor(proxyDriver) {
        super(proxyDriver);
    }

    async open() {
        await this.driver.get(this.cycleCallbacks);
        return this;
    }

    async verifySquareElement() {
        return await this.driver.findElement(this.testButtonCss).isEnabled();
    }

    async clickAddSquareButton() {
        await this.driver.findElement(this.addSquareButton).click();
        return this;
    }

    async clickUpdateSquareButton() {
        await this.driver.findElement(this.updateSquareButton).click();
        return this;
    }
}

export {Callback_page};