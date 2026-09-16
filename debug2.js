const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // set viewport height large so we can scroll
    await page.setViewport({ width: 1280, height: 800 });
    
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

    await page.goto('http://127.0.0.1:8080');
    
    // Click open
    await page.click('#open-invitation');
    
    // Wait for GSAP and transitions
    await new Promise(r => setTimeout(r, 2000));
    
    await page.screenshot({ path: 'screenshot2_after_click.png' });
    
    // Scroll down 1000px
    await page.evaluate(() => window.scrollBy(0, 1000));
    await new Promise(r => setTimeout(r, 500));
    
    await page.screenshot({ path: 'screenshot3_scrolled.png' });
    
    console.log("Screenshots taken.");
    await browser.close();
})();
