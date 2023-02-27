const { test, expect } = require('@playwright/test');
const { createBookTest } = require('./addBook.spec')
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
import { selectors } from '../selectors/bookDetailsPage';
import { bookDetailsPage } from '../pages/bookDetailsPage';
const constants = require('../pages/constants');

test('Check the details of the last added book', async ({ page }) => {
    // Navigate to the last added book
    await page.goto('https://mygradaran.herokuapp.com/books');
    const links = await page.$$('body > div > div > div a');
    const lastLink = links[links.length - 1];
    await lastLink.click();
  
    // Check that the details match the entered data
    await page.waitForSelector(selectors.bookTitle);
    const bookTitle = await page.innerText(selectors.bookTitle);
    expect(bookTitle).toBe(constants.endValue);
  
    const authorName = await page.innerText(selectors.authorName);
    expect(authorName).toBe(constants.authorName);
  
    const bookPublishDate = await page.innerText(selectors.bookPublishDate);
    expect(bookPublishDate).toBe(constants.publishDateFormatted);
  
    const bookPageCount = await page.innerText(selectors.bookPageCount);
    expect(bookPageCount).toBe(constants.pageCount);
  
    const bookDescription = await page.innerText(selectors.bookDescription);
    expect(bookDescription).toBe(constants.bookDescription);
  });