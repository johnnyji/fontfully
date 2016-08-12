/* eslint-disable no-plusplus */
import {fontfullyTag} from '../shared/utils/config';

export default () => {
  const tags = document.getElementsByName(fontfullyTag);

  if (!tags.length) return;

  const parent = tags[0].parentElement;

  for (let i = 0, l = tags.length; i < l; i++) {
    // As we remove each tag, the array of tags will
    // get smaller and smaller, so actually always have to be
    // removing the 0th element
    parent.removeChild(tags[0]);
  }
};
/* eslint-enable no-plusplus */
