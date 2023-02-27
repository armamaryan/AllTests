const { test, expect } = require('@playwright/test');
import { CreateBookPage } from '../pages/createBookPage';
const constants = require('../pages/constants');

test.describe('Creating a new book', () => {
  const randomText = constants.endValue;
  let createBookPage;
  test.beforeEach(async ({ page }) => {
    createBookPage = new CreateBookPage(page);
    await page.goto('https://mygradaran.herokuapp.com/books/new');
    await createBookPage.fillInputFields();
    await createBookPage.setAuthorDropdownOption();
    await createBookPage.setPublishDate();
    await createBookPage.coverImageUpload();
  });

  test('Check the enterred data', async ({ page }) => {
    expect.soft(await createBookPage.getBookTitleInputText()).toEqual(randomText)
    expect.soft(await createBookPage.getPageCountText()).toEqual(constants.pageCount)
    expect.soft(await createBookPage.getBookDescriptionInputText()).toEqual(constants.bookDescription)
    expect.soft(await createBookPage.getAuthorDropdownOption()).toBe(constants.selectedAuhtor)
    expect.soft(await createBookPage.getPublishDate()).toEqual(constants.publishDate)
  })

  test('Create a new book and make sure it is created successfully', async ({ page }) => {
    await createBookPage.clickCreateButton();
    expect(await createBookPage.getBookTitleValue()).toEqual(randomText)
  });
})

module.exports = { createBookTest: test };
