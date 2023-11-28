import path from "path";
import puppeteer, { Browser } from "puppeteer";
import absoluteUrl from "next-absolute-url";
import { NextApiRequest, NextApiResponse } from "next";

let chrome: Browser;
const getBrowser = async () => (chrome = chrome || (await puppeteer.launch()));

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const browser = await getBrowser();
  const page = await browser.newPage();

  // we only care about the width here, make sure it gets into 2xl
  // see: https://tailwindcss.com/docs/breakpoints
  page.setViewport({ width: 1536, height: 1080 });

  const { origin } = absoluteUrl(req, "http://localhost:3000");
  const homepage = await page.goto(origin);

  if (homepage.ok()) {
    // we need to add this to apply printing styles.
    // see the print plugin in the tailwind.config.js file for more details.
    await page.$eval("body", (el) => el.classList.add("print"));

    await page.pdf({
      printBackground: true,
      scale: 0.58,
      format: "a4",
      path: path.resolve("./public/alex-rohleder-cv.pdf"),
    });

    res.status(200).end("OK");
  } else {
    res.status(502).end("Bad Gateway");
  }

  await browser.close();
};
