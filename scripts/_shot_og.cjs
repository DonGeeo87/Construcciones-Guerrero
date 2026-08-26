const { chromium } = require('playwright');
(async () => {
  const html = process.argv[2];
  const out = process.argv[3];
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto('file:///' + html.replace(/\\/g, '/'));
  await page.waitForTimeout(300);
  await page.screenshot({ path: out, type: 'png' });
  await browser.close();
  console.log('OK');
})();
