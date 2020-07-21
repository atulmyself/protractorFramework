let loginpage = require('../pages/loginpage')

describe('Login page test', function() {

    it('Open Login page test', function() {
            
       loginpage.get('https://qa-dot-shipperbee-drivercentre.appspot.com');
        loginpage.enter_email('amit@yopmail.com');
        loginpage.enter_password('Pass@1234');
        loginpage.btn_submit();
       browser.sleep(10000);
       loginpage.verify("Dashboard");
    });

});