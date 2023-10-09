import {By} from "selenium-webdriver";
import webdriver from 'selenium-webdriver';
import {Locator_type} from "./locator_type.js";

class StrategyManager {
    constructor() {
        this._strategy = [];
    }

    setStrategy(strategy) {
        this._strategy = strategy;
    }

    getStrategy() {
        return this._strategy;
    }
}
export {StrategyManager,Strategy}

class Strategy {

    constructor(name, driver) {
        this._driver=driver;
        this._name=name;
    }

    async doAction(locator, text) {
        switch (this._name){
            case(Locator_type.XPath):
                await this._driver.findElement(By.xpath(locator)).sendKeys(text);
                break;
            case (Locator_type.Css):
                await this._driver.findElement(By.css(locator)).sendKeys(text);
                break;
            case Locator_type.Id:
                await this._driver.findElement(By.id(locator)).sendKeys(text);
                break;
            case Locator_type.ClassName:
                await this._driver.findElement(By.className(locator)).sendKeys(text);
                break;
            case Locator_type.LinkText:
                await this._driver.findElement(By.linkText(locator)).sendKeys(text);
                break;
            case Locator_type.Name:
                await this._driver.findElement(By.name(locator)).sendKeys(text);
                break;
            case Locator_type.PartialLinkText:
                await this._driver.findElement(By.partialLinkText(locator)).sendKeys(text);
                break;
            case Locator_type.TagName:
                await this._driver.findElement(By.tagName(locator)).sendKeys(text);
                break;
        }
    }

    async doActionByWait(locator, milliseconds) {
        var element;
        switch (this._name) {
            case (Locator_type.XPath):
                element = By.xpath(locator);
                break;
            case (Locator_type.Css):
                element = By.css(locator);
                break;
            case Locator_type.Id:
                element = By.id(locator);
                break;
            case Locator_type.ClassName:
                element = By.className(locator);
                break;
            case Locator_type.LinkText:
                element = By.linkText(locator);
                break;
            case Locator_type.Name:
                element = By.name(locator);
                break;
            case Locator_type.PartialLinkText:
                element = By.partialLinkText(locator);
                break;
            default:
                element = By.id(locator);
                break;
        }
        return this.isElementDisplayed(element, milliseconds);
    }

    async isElementDisplayed(element, milliseconds) {
        return await this._driver.wait(webdriver.until.elementLocated(element), milliseconds)
            .then(el => {
                return el.isDisplayed();
            }, function (error) {
                console.log(error);
                return false;
            });
    }
}