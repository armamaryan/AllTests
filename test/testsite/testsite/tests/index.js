import {ClientFunction, Selector} from 'testcafe';
import indexPage from '../pages/index_page'


// const videoElement = Selector('#player video');

// const currentTime = ClientFunction(() => {
//   return videoElement().currentTime;
// }, {dependencies: {videoElement}});

// const currentTime = ClientFunction(() => {
//     return document.querySelector('#player video').currentTime
//   });
  

fixture `Open Page` 
    .beforeEach(async (t) => {
        await t
            .maximizeWindow()
            .navigateTo(`https://www.beeline.am`);
    });

test('Index Page Test', async t => {
    await t
        .click(indexPage.languageLocator);
    const navBarItemsListCount = await indexPage.navBarItems.count;

    console.log("count = " + navBarItemsListCount);

    for (let i = 0; i<navBarItemsListCount; i++) {
        await t 
            .expect(indexPage.getnavBarItem(i).innerText).eql(indexPage.menuItemText[i]);
    }

    await t
        .click(indexPage.paymentsDotLocator)
        .wait(1000)
        .hover(indexPage.slider)
        .click(indexPage.slider.withText('Details'))
        // .navigateTo(`https://www.beeline.am/en/autopayments`)
        .switchToIframe(indexPage.videoPlayerIframe);

    const startTime = await indexPage.currentTime();
    console.log("start time" + startTime);

    await t
        .click(indexPage.videopl)
        .wait(5000);
    const endTime = await indexPage.currentTime();
    console.log("end time" + endTime);
    await t
        .click(indexPage.videopl)
        .expect(startTime).lt(endTime)
        .wait(2000)
        .expect(await indexPage.currentTime()).lte(endTime+500);
  
    
});