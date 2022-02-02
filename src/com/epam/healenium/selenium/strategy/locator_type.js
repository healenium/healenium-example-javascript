class Locator_type {
    static XPath = new Locator_type('xpath');
    static Css = new Locator_type('css');

    static Id = new Locator_type('id');
    static ClassName = new Locator_type('className');
    static LinkText = new Locator_type('linkText');
    static Name = new Locator_type('name');
    static PartialLinkText = new Locator_type('partialLinkText');
    static TagName = new Locator_type('tagName');

    constructor(name) {
        this._name = name;
    }
}

export {Locator_type}
