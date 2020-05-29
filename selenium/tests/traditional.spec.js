const webdriver = require('selenium-webdriver');

function v1Test() {
    let driver = new webdriver.Builder()
        .forBrowser('chrome')
        .usingServer('http://localhost:4444/wd/hub')
        .build();

    driver.get('https://demo.applitools.com/gridHackathonV1.html');
}

v1Test();
