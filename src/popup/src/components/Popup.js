import React, {Component} from 'react';
import FontActionCreators from '../../../action_creators/FontActionCreators';
import FontOption from './FontOption';
import {FONTS} from '../../../shared/utils/config';
import getCurrentTab from '../utils/getCurrentTab';
import Icon from '../../../shared/components/ui/Icon';
import Immutable from 'immutable';
import pureRender from 'pure-render-decorator';
import styles from '../../scss/Popup.scss';

@pureRender
export default class Popup extends Component {

  static displayName = 'Popup';

  state = {
    filter: '',
    selectedFont: null
  };

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
    const {filter, selectedFont} = this.state;
    const filterValue = filter.toLowerCase().trim();
    const fontOptions = FONTS
      .filter((font) => font.get('name').toLowerCase().includes(filterValue))
      .map((font, i) => (
        <FontOption
          font={font}
          isSelected={Immutable.is(font, selectedFont)}
          key={i}
          onSelect={this._handleSelectFont} />
      ));

    return (
      <div className={styles.main}>
        <header className={styles.header}>
          <input
            className={styles.input}
            onChange={this._handleChange}
            placeholder='Search fonts...'
            value={filter} />
          <button
            className={styles.resetButton}
            onClick={this._handleRemoveFonts}>
            <Icon icon='refresh' size={20} />
          </button>
        </header>
        <div className={styles.fonts}>
          {fontOptions.size ? fontOptions : this._renderNoFontsMessage()}
        </div>
      </div>
    );
  }
  
  _renderNoFontsMessage = () => {
    return (
      <div className={styles.noResults}>¯\_(ツ)_/¯</div>
    );
  };

  _handleChange = ({target: {value: filter}}) => {
    this.setState({filter});
  };

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
