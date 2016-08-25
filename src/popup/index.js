import 'babel-polyfill';
import Popup from './src/components/Popup';
import {render} from 'react-dom';
import React from 'react';

window.addEventListener('load', () => {
  const injectDom = document.createElement('div');
  injectDom.className = 'fontfully-popup';

  document.body.appendChild(injectDom);

  render(<Popup />, injectDom);
});
