let loginpage = function(){

   let email = element(by.name('email'));
   let password =  element(by.name('password'));
   let submit_btn =  element(by.className('btn btn-black-filled text-uppercase latoregular'));
    
   this.get = function(url){
        browser.get(url);
   };

   this.enter_email = function(emails){
    email.sendKeys(emails);
   };

   this.enter_password = function(passwords){
     password.sendKeys(passwords);
   };

   this.btn_submit = function(){
    submit_btn.click();
  };

  this.verify = function(result){
    let res = element(by.linkText('Dashboard'));
    expect(res.getText()).toEqual(result);
  };

};

// to expoe this file
module.exports = new loginpage();