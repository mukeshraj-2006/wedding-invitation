const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    
    await page.goto('http://127.0.0.1:8080');
    await page.click('#open-invitation');
    await new Promise(r => setTimeout(r, 2000));
    
    // Scroll down 1000px
    await page.evaluate(() => window.scrollBy(0, 1000));
    await new Promise(r => setTimeout(r, 500));
    
    // Dump HTML
    const html = await page.content();
    fs.writeFileSync('dom_dump.html', html);
    
    console.log("DOM dumped.");
    await browser.close();
})();
