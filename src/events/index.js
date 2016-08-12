import injectContentScript from './injectContentScript';
import {URL_MATCHER} from './utils/config';

chrome.runtime.onInstalled.addListener(() => {
  // When the extension is installed or updated,
  // we must re-inject the content scripts into the page, otherwise our
  // content script won't work until each tab is manually refreshed

  chrome.windows.getAll({populate: true}, (windows) => {

    // Goes through every tab of every open window
    // and injects our content script into them
    windows.forEach(({tabs}) => {
      tabs.forEach((tab) => {
        if (tab.url.match(URL_MATCHER)) {
          injectContentScript(tab);
        }
      });
    });

  });
});
