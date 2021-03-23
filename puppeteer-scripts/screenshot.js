import puppeteer from 'puppeteer';

(async () => {
  const URL = process.argv[2];
  const OUTPUT = process.argv[3];

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  });

  await page.goto(URL);

  await page.screenshot({
    path: OUTPUT,
  });

  await browser.close();
})();
