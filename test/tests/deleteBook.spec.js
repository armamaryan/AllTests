const { test, expect } = require('@playwright/test');
import bookDetailsPage, { selectors } from '../selectors/bookDetailsPage';
import { BookDetailsPage } from '../pages/bookDetailsPage';

test.describe('Creating a new book', () => {
let bookDetailsPage;
test.beforeEach(async ({ page }) => {
    bookDetailsPage = new BookDetailsPage(page);
})
test('Delete Book', async ({ page }) => {
    // const bookListBeforeDelete = await page.$$('body > div > div > div a');
    // const countBeforeDelete = bookListBeforeDelete.length;
    await bookDetailsPage.lastLinkOpen(page);
    await bookDetailsPage.clickDeleteButton();

    // await page.goto('https://mygradaran.herokuapp.com/books');
    // const bookListAfterDelete = await page.$$('body > div > div > div a');
    // const countAfterDelete = await bookListAfterDelete.length;

    // // console.log(countBeforeDelete);
    // // console.log(countAfterDelete);

    // expect(countBeforeDelete - countAfterDelete).toEqual(1);

});
})