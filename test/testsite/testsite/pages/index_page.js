import {Selector,ClientFunction} from 'testcafe';
import {selectors, staticTexts} from '../constants/index_page_constants';

class IndexPage {
constructor() {
    this.languageLocator = Selector(`${selectors.languageLocator}`);
    this.navBarItems = Selector(`${selectors.navBarItems}`);
    this.detailsButtonLocator = Selector(`${selectors.detailsButtonLocator}`);
    this.slider = Selector(`${selectors.sliderLocator}`);
    this.paymentsDotLocator = Selector(`${selectors.paymentsDotLocator}`);
    this.menuItemText = staticTexts.menuItemsListText;
    this.languageLocator = Selector(`${selectors.languageLocator}`);
    this.videoPlayerIframe = Selector(`${selectors.videoPlayerIframe}`,{timeout: 25000});
    this.videoPlayer = selectors.videoPlayer;
    this.videopl = selectors.video;
}
getnavBarItem(n) {
    return this.navBarItems.nth(n);
}

currentTime() {
    return ClientFunction((selector) => {
      const videoEl = document.querySelector(selector);
      return videoEl.currentTime;
    })(this.videoPlayer);
  }

}

export default new IndexPage