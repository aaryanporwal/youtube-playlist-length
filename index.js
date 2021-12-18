#!/usr/bin/env node

const puppeteer = require("puppeteer");
let url = process.argv[2];
if (!url) {
  // throw "Please provide URL as a first argument";
  url =
    "https://www.youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET";
}

(async function calculateTotalTime() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle0" });

  let playlistLength = await page.evaluate(async () => {
    // const delay = ms => new Promise(res => setTimeout(res, ms));
    // await delay(100); // delay for loading the whole page (100ms)
    let el = document.querySelectorAll("span#text");
    let totalTime = 0;
    let floats = [];
    el.forEach((e) => {
      let e1 = e.innerText.replace(":", ".");
      floats.push(parseFloat(e1));
    });
    floats.forEach((float) => {
      totalTime += float;
    });
    return totalTime;
  });
  let hours = Math.floor(playlistLength / 60);
  let minutes = Math.floor(playlistLength % 60);

  console.log(`Total playlist time:
    ${playlistLength}
    ${hours} hours and ${minutes} minutes
  `);
  await browser.close();
})();
