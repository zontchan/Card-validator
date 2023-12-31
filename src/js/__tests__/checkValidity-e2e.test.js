import puppetteer from 'puppeteer';
jest.setTimeout(30000); // default puppeteer timeout
describe('check validity of card number', () => {
    let browser = null;
    let page = null;
    const baseUrl = 'http://localhost:9000';
    beforeAll(async () => {
        browser = await puppetteer.launch({
                //executablePath: 'C:\\web\\theory\\Продвинутый JS в браузере домашка\\MY HW\\testing-card-validator_hw\\.cache\\puppeteer\\chrome\\win64-115.0.5790.98\\chrome-win64\\chrome.exe',
           //headless: false,// show gui
            //slowMo: 100,
            //devtools: true, // show devTools
        ignoreDefaultArgs: ['--disable-extensions']
       }
        );
        page = await browser.newPage();
    });
    afterAll(async () => {
        await browser.close();
    });
        test('should add .valid class for valid card number', async () => {
            await page.goto(baseUrl);
            const form = await page.$('.form');
            await page.$eval('.card-input', el => el.value = '4929620273994371');
            const submit = await form.$('.button');
            submit.click();
            await page.waitForSelector('.result.valid');
        });
    test('should add .invalid class for invalid card number', async () => {
        await page.goto(baseUrl);
        const form = await page.$('.form');
        await page.$eval('.card-input', el => el.value = '4929620273994372');
        const submit = await form.$('.button');
        submit.click();
        await page.waitForSelector('.result.invalid');
    });
});
