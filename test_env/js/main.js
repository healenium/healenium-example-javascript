//CSS Hover
//XPath Hover
//    <a:hover>
var test = document.getElementById("change_id");
    test.addEventListener("mouseenter", function( event ) {
      // highlight the mouseenter target
      event.target.name="hover";

      setTimeout(function() {
          event.target.name="hover";
        }, 3000);
      },true);

function showValidate() {
//CSS Id - change_id -> newValue
//Find element by Id
    var idField=document.getElementById("change_id");
    idField.id="newValue";
    idField.name="return name";

//CSS ClassName - test_class -> newClass
//Find element by classname
//XPath Not Contains className 'input1'
//XPath Contains className 'test'
//XPath Following-Sibling
//XPath Starts-with 'test'
//XPath Ancestor::
    var classNameField=document.getElementById("change_className");
    classNameField.className="newClass";

//CSS Element - test_tag -> input
//Find element by tagName
//CSS FirstChild
    var elemField=document.getElementById("change_element");
    elemField.outerHTML = elemField.outerHTML.replace(/test_tag/g,"input");

//CSS LastChild
    var lastField=document.getElementById("change_element_last_child");
    lastField.outerHTML = lastField.outerHTML.replace(/child_tag/g,"input");

//CSS Disabled - Healing locators _4
//    <input:disabled>
    var disField=document.getElementById("change_disabled");
    disField.disabled=false;

//CSS Enabled - Healing locators _5
//    <input:enabled>
    var enField=document.getElementById("change_enabled");
    enField.disabled=true;

//CSS Checked - Healing locators _6
//    <input:checked>
    var chField=document.getElementById("change_checked");
    chField.checked=false;

//<!--===============================================================================================-->
//    Semantic

//Find element by xpath - Healing locators _2
//    <xpath>

//Find element by linktext
//Find element by partialLinkText
    var linksField=document.getElementById("change_links");
    linksField.href="https://github.com/healenium";
    linksField.text="New text here";

//Find element by name - Healing locators _5
//XPath with special characters
    var nameField=document.getElementById("change:name");
    nameField.name="newName";
    nameField.id="newName";

//XPath Following - Healing Locators _2
//XPath OR - Healing Locators _6
//XPath And - Healing Locators _7
//XPath Precending::
//XPath Descendant::
    var decField=document.getElementById("descendant_change");
    decField.id="newDescendant";
 }

 //<!--===============================================================================================-->
 //Conditional wait for alert
function hlmWait(){
    setTimeout(function() {
        var value=Math.floor(Math.random() * 100);
        alert(value);
    }, 10000);
 }