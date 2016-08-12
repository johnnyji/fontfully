export default (tab) => {
  const scripts = chrome.runtime.getManifest().content_scripts[0];
  
  (scripts.js || []).forEach((file) => {
    chrome.tabs.executeScript(tab.id, {file});
  });
};
