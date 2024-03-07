const {Builder, By, until} = require('selenium-webdriver');
var driver = null;
timeout = 5 * 1000;

async function builder(){
    driver = await new Builder()
    .forBrowser("chrome")
    .build()
};

async function navigate(url){
    await driver.get(url);
};

async function getElement(element){
    for(const key in element){
        if(key === 'id'){
            await driver.wait(until.elementLocated(By.id(element.id)), timeout);
            const el = await driver.findElement(By.id(element.id));
            return el;
        } else {
            await driver.wait(until.elementLocated(By.xpath(element.xpath)), timeout);
            const el = await driver.findElement(By.xpath(element.xpath));
            return el;
        };
    }
};

async function waitToSeElement(element){
    await driver.wait(until.elementLocated(By.id(element)), timeout);
    await driver.findElement(By.id(element))
};

async function click(element){
    const el = await getElement(element);
    await el.click();
};

async function fillText(element, text){
    const el = await getElement(element);
    await el.sendKeys(text);
};

async function quit(){
    await driver.quit();
};

module.exports = {
    builder,
    click,
    fillText,
    quit,
    navigate
};