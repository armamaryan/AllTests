import { selectors } from '../selectors/bookDetailsPage';
export class BookDetailsPage{
    constructor(page) {
        this.page = page;
        this.bookTitle = page.locator(selectors.bookTitle);
        this.authorName = page.locator(selectors.authorName);
        this.bookPublishDate = page.locator(selectors.bookPublishDate);
        this.bookPageCount = page.locator(selectors.bookPageCount);
        this.bookDescription = page.locator(selectors.bookDescription);
        this.bookEditButton = page.locator(selectors.bookEditButton);
        this.bookDeleteButton = page.locator(selectors.bookDeleteButton);
        this.bookViewAuthorButton = page.locator(selectors.bookViewAuthorButton);
    }

    async clickDeleteButton() {
        await this.page.click(selectors.bookDeleteButton);
    }

    async lastLinkOpen(page) {
            // Navigate to the last added book
    await page.goto('https://mygradaran.herokuapp.com/books');
    const links = await page.$$('body > div > div > div a');
    const lastLink = links[links.length - 1];
    await lastLink.click();
    }
};
