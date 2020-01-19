
var loginPage = function(){

    this.username = element(by.id('username'));
    this.password = element(by.xpath("//input[@name='pwd']"));
    this.loginbutton = element(by.xpath("//div[text()='Login ']"));
    this.errormessage = element(by.xpath("//span[text()='Username or Password is invalid. Please try again.']"));
    this.domain ="http://localhost/login.do;jsessionid=9t8jbndg9omu8";
    
    this.get = function () {
        browser.driver.get(`${this.domain}`);
    };
    this.clickElement = function (xpath) {
        const EC = ExpectedConditions;
        return browser.wait(EC.visibilityOf(xpath),10000,'Written xpath is not found.......').then(function() {
            // xpath.click();
            browser.actions().mouseMove(xpath).click().perform();
         });
    };
    this.sendKeysInElement = function (xpath1,sendKeys) {
        const EC = ExpectedConditions;
        return browser.wait(EC.visibilityOf(xpath1),10000,'Written xpath is not found.......').then(function() {
            // xpath1.sendKeys(sendKeys);
            browser.actions().mouseMove(xpath1).click().perform();
            xpath1.sendKeys(sendKeys);
         });
    };
    this.checkErorMessage = function (){
        this.errormessage.isDisplayed().then (function (isVisible) {
            if (isVisible) {
                console.log('--Error message is coming');
            } else {
                console.log('--Error message is not coming');
                fail('--Error message is not coming');
            }
        });
    }



    };
    module.exports = loginPage;