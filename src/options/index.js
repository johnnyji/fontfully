import 'babel-polyfill';
import Options from './src/components/Options.js';
import {render} from 'react-dom';
import React from 'react';

render(<Options />, document.getElementById('options'));