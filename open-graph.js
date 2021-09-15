const fs = require('fs');
const puppeteer = require('puppeteer');

const url = 'http://localhost:1313/open-graph/';
const cssSelectorForImages = '.open-graph-img';
const outputDir = 'obj/object-graph';

if (fs.existsSync(outputDir) === false){
    fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const elements = await page.$$(cssSelectorForImages);

    for (let element of elements) {
        const id = await element.getProperty('id');
        await element.screenshot({
            path: `${outputDir}/${await id.jsonValue()}.png`
        });
    }

    await page.close();
    await browser.close();
})();
