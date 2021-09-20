#!/usr/bin/env node

const puppeteer = require('puppeteer');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nums = []
// get the url from the user input
rl.question('Enter the url: ', (url) => {}
  // async function configureBrowser() {
  //   const browser = await puppeteer.launch();
  //   const page = await browser.newPage();
  //   await page.goto(url);
  //   return page;
  // }

  // async function getVideoTime(page) {}
  // rl.close();
