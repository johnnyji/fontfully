export default (cb) => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    cb(tabs[0]);
  });
};
