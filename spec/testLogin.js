var LoginPage = require("../pages/loginPage.js");

describe('ActiTime', function() {
    var login = new LoginPage();
    browser.waitForAngularEnabled(false);

    beforeEach (function(){
    login.get();
    });

it('Should error message come',function() {

    login.clickElement(login.loginbutton);
    login.checkErorMessage();
});
it('Should able to login with valid password',function() {

    login.sendKeysInElement(login.username,'admin');
    login.sendKeysInElement(login.password,'manager');
    login.clickElement(login.loginbutton);

})

});
    