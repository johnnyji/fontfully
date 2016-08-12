/* eslint-disable no-plusplus */
import {fontfullyTag} from '../shared/utils/config';

export default () => {
  const tags = document.getElementsByName(fontfullyTag);

  if (!tags.length) return;

  const parent = tags[0].parentElement;

  // Remove all fontfully injected tags
  for (let i = 0, l = tags.length; i < l; i++) {
    parent.removeChild(tags[i]);
  }
};
/* eslint-enable no-plusplus */
