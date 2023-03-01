const { test, expect } = require('@playwright/test');
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
import { selectors, staticTexts } from '../selectors/main';

test.beforeEach(async ({ page }) => {
  await page.goto('https://mygradaran.herokuapp.com/');

test('Authors page', async ({ page }) => {
  const click = await page.click(selectors.allAuthors);
  expect(page.url('https://mygradaran.herokuapp.com/authors'));
});

test('Add Author page', async ({ page }) => {
  const click = await page.click(selectors.addAuthor);
  await delay(2000);
  expect(page.url('https://mygradaran.herokuapp.com/authors/new'));
});

test('All Books page', async ({ page }) => {
  const click = await page.click(selectors.allBooks);
  await delay(2000);
  expect(page.url('https://mygradaran.herokuapp.com/books'));
});

test('Add Book page', async ({ page }) => {
  const click = await page.click(selectors.addBook);
  await delay(2000);
  expect(page.url('https://mygradaran.herokuapp.com/books/new'));
});

test('Authors page, links for the single author', async ({ page }) => {
  const click = await page.click(selectors.allAuthors);
  await delay(2000);
  expect(page.url('https://mygradaran.herokuapp.com/authors'));
  await page.locator(selectors.viewAuthor).click();
  expect(page.url('https://mygradaran.herokuapp.com/authors/62daacbe65c97d682fa7ae86'));
  await page.goBack('https://mygradaran.herokuapp.com/authors');
  await page.locator(selectors.editAuthor).click();
  expect(page.url('https://mygradaran.herokuapp.com/authors/62daacbe65c97d682fa7ae86/edit'));
  await page.goBack('https://mygradaran.herokuapp.com/authors');
  const name = await page.innerText('text=Raffi View Edit Delete >> button');
  expect(name).toBe('Delete');
});

test('Authors page, Title and search field', async ({ page }) => {
  const click = await page.click(selectors.allAuthors);
  await delay(2000);
  expect(page.url('https://mygradaran.herokuapp.com/authors'));
  const title = await page.innerText(selectors.searchAuthorsTitle);
  expect(title).toBe(staticTexts.searchAuthors);
  const searchFieldLabel = await page.innerText(selectors.searchFieldName);
  await delay(2000);
  expect(searchFieldLabel).toBe(staticTexts.searchFieldNameText);
  await page.fill(selectors.searchInput, "Raffi");
  await page.click(selectors.searchButton);
  await delay(2000);
  expect(page.waitForURL('https://mygradaran.herokuapp.com/authors?name=Raffi'));
  await page.goBack('https://mygradaran.herokuapp.com/authors');
});
})