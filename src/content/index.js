import changePageFont from './changePageFont';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.font) {
    changePageFont(request.font);
  }

  sendResponse({});
});