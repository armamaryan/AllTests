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
         this.bookDescriptionInput.fill(constants.bookDescription);
    }

     async getBookTitleInputText() {
        return this.bookTitleinput.inputValue();
    }

    async getPageCountText() {
        return this.pageCount.inputValue();
    }

    async getBookDescriptionInputText() {
        return this.bookDescriptionInput.inputValue();
    }

    async getAuthorDropdownOption() {
        return this.authorDropdown.inputValue();
    }

    async getPublishDate() {
        return this.publishDate.inputValue();
    }

    async getBookTitleValue() {
        return this.bookTitle.innerText();

    }

    async setAuthorDropdownOption() {
       await  this.authorDropdown.selectOption({ label: 'Romian Toma' });
    }

    async clickCreateButton() {
         this.page.click(selectors.createButton);
    }

    async setPublishDate() {
        const date = new Date('July 1, 1979');
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const dateString = `${year}-${month}-${day}`;
         this.publishDate.fill(dateString);
    }

    async coverImageUpload() {
        const [fileChooser] = await Promise.all([
            this.page.waitForSelector('input[type=file]'),
        ]);

        // const os = require('os');
        // const path = require('path');
        // const filePath = path.join(os.homedir(), 'bookCover.jpg');
        const filePath = ('media_files\\bookCover.jpg')
         fileChooser.setInputFiles(filePath);
        await this.page.waitForTimeout(2000);

    }
};