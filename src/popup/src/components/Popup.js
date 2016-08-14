import React, {Component} from 'react';
import FontActionCreators from '../../../action_creators/FontActionCreators';
import FontOption from './FontOption';
import {FONTS} from '../../../shared/utils/config';
import getCurrentTab from '../utils/getCurrentTab';
import Immutable from 'immutable';
import Icon from '../../../shared/components/ui/Icon';
import pureRender from 'pure-render-decorator';
import styles from '../../scss/Popup.scss';

@pureRender
export default class Popup extends Component {

  static displayName = 'Popup';

  state = {
    selectedFont: null
  };

  componentWillUpdate (nextState) {
    if (!nextState.selectedFont) {
      window.close();
    }
  }

  componentDidUpdate (_, prevState) {
    const {selectedFont} = this.state;
    // When the user chooses a new font
    if (!Immutable.is(selectedFont, prevState.selectedFont)) {
      // Finds the current tab
      getCurrentTab((tab) => {
        // Change the font to the newly selected one
        chrome.tabs.sendMessage(tab.id, FontActionCreators.changeFont(selectedFont), () => {
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
        <button
          className={styles.resetButton}
          onClick={this._handleRemoveFonts}>
          <Icon icon='refresh' />
        </button>
        <div className={styles.header} />
        <div className={styles.fonts}>{fontOptions}</div>
      </div>
    );
  }

  _handleSelectFont = (selectedFont) => {
    this.setState({selectedFont});
  };

  _handleRemoveFonts = () => {
    getCurrentTab((tab) => {
      chrome.tabs.sendMessage(tab.id, FontActionCreators.removeFonts(), () => {
        window.close();
      });
    });
  };

}
