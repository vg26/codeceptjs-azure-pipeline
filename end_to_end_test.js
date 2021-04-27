Feature('end to end test');



Scenario('checkout', ({ I }) => {

    I.amOnPage('/');
    I.see('Sign in');
    I.click('Sign in');
    I.see('email');
    I.fillField('email', 'test123@testxxx.com');
    I.fillField('passwd', 'password');
    I.click('SubmitLogin');
    I.see('My account');
    I.click('Women');
    I.scrollTo({xpath:'//*[@id=\"center_column\"]/ul/li//span[contains(text(), \"Add to cart\")]'});
    I.click({xpath:'//*[@id=\"center_column\"]/ul/li//span[contains(text(), \"Add to cart\")]'});
    I.see('Proceed to checkout');
    I.click('Proceed to checkout');
    I.scrollTo('Footer');
    I.click({xpath:'//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/p[2]/a[1]/span[1]'});
    I.scrollTo('Footer');
    I.click({xpath:'//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/form[1]/p[1]/button[1]/span[1]'});
    I.scrollTo({id:'cgv'});
    I.checkOption({id:'cgv'});
    I.click({xpath:'//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/p[1]/button[1]/span[1]'});
    I.see('Pay by bank wire');
    I.click('Pay by bank wire');
    I.see('I confirm my order');
    I.click('I confirm my order');
    I.see('Your order on My Store is complete.');

});
