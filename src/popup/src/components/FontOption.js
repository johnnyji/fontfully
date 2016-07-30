import React, {Component, PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import pureRender from 'pure-render-decorator';
import styles from '../../scss/FontOption.scss';

@pureRender
export default class FontOption extends Component {

  static displayName = 'FontOption';

  static propTypes = {
    isSelected: PropTypes.bool.isRequired,
    font: ImmutablePropTypes.mapContains({
      filename: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      src: PropTypes.string
    }).isRequired,
    onSelect: PropTypes.func.isRequired
  };
  
  render() {
    return (
      <button className={styles.main} onClick={this._handleClick}>
        {this.props.font.get('name')}
      </button>
    );
  }

  _handleClick = () => {
    this.props.onSelect(this.props.font);
  };
}