import changePageFont from './changePageFont';
import FontActionTypes from '../action_types/FontActionTypes';
import removeFonts from './removeFonts';

chrome.runtime.onMessage.addListener(({type, data}, sender, sendResponse) => {

  if (!type) return sendResponse({});

  switch (type) {

    case FontActionTypes.CHANGE_FONT:
      changePageFont(data.font);
      sendResponse({});
      return;
    
    case FontActionTypes.REMOVE_FONTS:
      removeFonts();
      sendResponse({});
      return;

    default:
      sendResponse({});
      return;

  }

});
