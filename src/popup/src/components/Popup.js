import React, {Component} from 'react';
import FontOption from './FontOption';
import {FONTS} from '../../../shared/utils/config';
import Immutable from 'immutable';
import pureRender from 'pure-render-decorator';
import styles from '../../scss/Popup.scss';

@pureRender
export default class Popup extends Component {

  static displayName = 'Popup';

  state = {
    selectedFont: null
  };

  componentDidUpdate (_, prevState) {
    if (!Immutable.is(this.state.selectedFont, prevState.selectedFont)) {
      // Finds the current tab
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        // Change the font to the newly selected one
        chrome.tabs.sendMessage(tabs[0].id, {font: this.state.selectedFont}, () => {
          // Close the popup once we've successfully set the font
          window.close();
        });
      });
    }
  }

  render() {
    const {selectedFont} = this.state;
    const fontOptions = FONTS.map((font, i) => (
      <FontOption
        font={font}
        isSelected={Immutable.is(font, selectedFont)}
        key={i}
        onSelect={this._handleSelectFont} />
    ));

    return (
      <div className={styles.main}>
        <h1 className={styles.header}>Change This Pages Font!</h1>
        <div className={styles.fonts}>{fontOptions}</div>
      </div>
    );
  }

  _handleSelectFont = (selectedFont) => {
    this.setState({selectedFont});
  };

}
