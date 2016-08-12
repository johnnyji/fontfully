import FontActionTypes from '../action_types/FontActionTypes';

export default {

  changeFont (font) {
    return {
      type: FontActionTypes.CHANGE_FONT,
      data: {font}
    };
  },
  
  removeFonts () {
    return {
      type: FontActionTypes.REMOVE_FONTS
    };
  }

};
