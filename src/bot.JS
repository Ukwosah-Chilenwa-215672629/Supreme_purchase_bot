const keys = require('./dictionary')

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
      By = webdriver.By,
      until = webdriver.until;
const firefox = require('selenium-webdriver/firefox');

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

// const gmail_login = async()  =>{
//     await  driver.get( 'https://stackexchange.com/');
//     await driver.findElement(By.xpath('/html/body/div/header[1]/div/ol/li[3]/a')).click();
//     await driver.findElement(By.xpath('//*[@id="openid-buttons"]/button[1]')).click();
//     await sleep(2000);
//     driver.findElement(By.xpath('//*[@id="identifierId"]')).sendKeys('solomonukwosah@gmail.com');
//     await sleep(2000);
//     await driver.findElement(By.xpath('//*[@id="identifierNext"]/div/button/div[2]')).click();
 
// }  
   
const order = async(K) => {
    driver.get( 'https://www.supremenewyork.com/shop/accessories/z4yis9z7c');
    driver.findElement(By.xpath('//*[@id="s"]/option[2]')).click();

     driver.findElement(By.xpath('//*[@id="add-remove-buttons"]/input')).click();
            await driver.sleep(10000);
    await driver.findElement(By.xpath('//*[@id="cart"]/a[2]')).click();
          
    driver.findElement(By.xpath('//*[@id="order_billing_name"]')).sendKeys('Solomon Ukwosah');
    driver.findElement(By.xpath('//*[@id="order_email"]')).sendKeys('solomonukwosah@gmail.com');
    driver.findElement(By.xpath('//*[@id="order_tel"]')).sendKeys('23456798765');
    driver.findElement(By.xpath('//*[@id="bo"]')).sendKeys('33 coltrane dr');
    driver.findElement(By.xpath('//*[@id="order_billing_zip"]')).sendKeys('L4J9A9');
    driver.findElement(By.xpath('//*[@id="order_billing_city"]')).sendKeys('Vaughan');
    driver.findElement(By.xpath('//*[@id="rnsnckrn"]')).sendKeys('5510632456784');
    driver.findElement(By.xpath('//*[@id="orcer"]')).sendKeys('641');

    // drop down
    // country
    await driver.findElement(By.xpath('//*[@id="order_billing_country"]/option[2]')).click();
    driver.findElement(By.xpath('//*[@id="order_billing_state"]/option[10]')).click();
    driver.findElement(By.xpath('//*[@id="credit_card_month"]/option[5]')).click();
    driver.findElement(By.xpath('//*[@id="credit_card_year"]/option[4]')).click();
    
    // terms and conditions
    driver.findElement(By.xpath('//*[@id="cart-cc"]/fieldset/p/label/div/ins')).click();


    // payment
    await driver.findElement(By.xpath('//*[@id="pay"]/input')).click();
}
order(keys);

// gmail_login();