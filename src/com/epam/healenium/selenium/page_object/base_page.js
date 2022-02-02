class Base_page {
    driver;

    constructor(proxyDriver) {
        this.driver = proxyDriver;
    }

    confirmAlert() {
        let alert = this.driver.switchTo().alert();
        alert.accept();
    }
}

export {Base_page};