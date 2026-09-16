const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 400, height: 800 }); // Mobile view
    
    console.log("Navigating to page...");
    await page.goto('http://127.0.0.1:8080');
    
    console.log("Clicking open invitation...");
    await page.click('#open-invitation');
    await new Promise(r => setTimeout(r, 2000));
    
    // Take screenshots at various scroll percentages
    for (let i = 0; i <= 5; i++) {
        let scrollY = i * 2000; // 0, 2000, 4000, 6000, 8000, 10000
        await page.evaluate((y) => window.scrollTo(0, y), scrollY);
        await new Promise(r => setTimeout(r, 500));
        await page.screenshot({ path: `scroll_test_${i}.png` });
        console.log(`Screenshot ${i} taken at ${scrollY}px`);
    }
    
    await browser.close();
})();
