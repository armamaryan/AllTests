import { selectors } from '../selectors/createBookPage';
const constants = require('../pages/constants');


export class CreateBookPage {
    constructor(page) {
        this.page = page;
        this.bookTitleinput = page.locator(selectors.bookTitleinput);
        this.authorDropdown = page.locator(selectors.authorDropdown);
        this.publishDate = page.locator(selectors.publishDate);
        this.pageCount = page.locator(selectors.pageCount);
        this.coverImageInput = page.locator(selectors.coverImageInput);
        this.bookDescriptionInput = page.locator(selectors.bookDescriptionInput);
        this.createButton = page.locator(selectors.createButton);
        this.bookTitle = page.locator(selectors.bookTitle);
    }
    async fillInputFields() {
        // Fill the book title
        await this.bookTitleinput.fill(constants.endValue);
        // Enter the page count
        await this.pageCount.fill(constants.pageCount);
        // Enter description
        await this.bookDescriptionInput.fill(constants.bookDescription);
    }

    async getBookTitleInputText() {
        return await this.bookTitleinput.inputValue();
    }

    async getPageCountText() {
        return await this.pageCount.inputValue();
    }

    async getBookDescriptionInputText() {
        return await this.bookDescriptionInput.inputValue();
    }

    async getAuthorDropdownOption() {
        return await this.authorDropdown.inputValue();
    }

    async getPublishDate() {
        return await this.publishDate.inputValue();
    }

    async getBookTitleValue() {
        return await this.bookTitle.innerText();

    }

    async setAuthorDropdownOption() {
        await this.authorDropdown.selectOption({ label: 'Romian Toma' });
    }

    async clickCreateButton() {
        await this.page.click(selectors.createButton);
    }

    async setPublishDate() {
        const date = new Date('July 1, 1979');
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const dateString = `${year}-${month}-${day}`;
        await this.publishDate.fill(dateString);
    }

    async coverImageUpload() {
        const [fileChooser] = await Promise.all([
            this.page.waitForSelector('input[type=file]'),
        ]);

        const os = require('os');
        const path = require('path');

        const filePath = path.join(os.homedir(), 'bookCover.jpg');
        await fileChooser.setInputFiles(filePath);
        await this.page.waitForTimeout(2000);

    }
};