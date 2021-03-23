import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const URL = process.argv[2];
  const OUTPUT = process.argv[3];

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(URL);

  const links = await page.evaluate(() =>
    Array.from(document.querySelectorAll('a'), (element) =>
      element.getAttribute('href')
    )
  );

  await browser.close();

  fs.writeFile(OUTPUT, links.join('\n'), (err, _) => {
    if (err) console.error(err);
  });
})();
