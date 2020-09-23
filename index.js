const {
  webkit,
  firefox,
  chromium
} = require('playwright');

const stiumlateBrowser = async (browserEngine) => {

  const browser = await browserEngine.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();

  await page.goto('http://whatsmyuseragent.org/');
  await page.screenshot({ path: `example-${browserEngine._initializer.name}.png` });

  await browser.close();
};

stiumlateBrowser(firefox)
stiumlateBrowser(webkit)
stiumlateBrowser(chromium)



