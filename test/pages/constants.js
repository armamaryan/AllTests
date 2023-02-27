let endValue;

function bookTitleGeneratedText() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
endValue = bookTitleGeneratedText();
const pageCount = '224';
const bookDescription = 'The Hitchhiker\'s Guide to the Galaxy is a comic science fiction series created by Douglas Adams.';
const publishDate = '1979-10-01';
const publishDateFormatted = 'Mon Oct 01 1979';
const selectedAuhtor = '62ea5cd484ea6816f841c5cf';
const authorName = 'Romian Toma';

module.exports = {
  bookTitleGeneratedText, pageCount, endValue, bookDescription, publishDate, selectedAuhtor, authorName, publishDateFormatted
};