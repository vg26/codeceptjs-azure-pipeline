Feature('login');

Scenario('test something', ({ I }) => {

    I.amOnPage('/login');
    I.see('Login');
    I.fillField('UserName', 'vladgul1');
    I.fillField('Password','Vladgul1!');
    I.click('Login');
    I.see('Profile');

});

Scenario('login with invalid credentials', ({ I }) => {

    I.amOnPage('/login');
    I.see('Login');
    I.fillField('UserName', 'vladgul');
    I.fillField('Password','Vladgul1!');
    I.click('Login');
    I.see('Invalid username or password!');

});
