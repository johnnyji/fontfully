import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
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
    const {font, isSelected} = this.props;
    const classes = classNames(
      styles.main,
      styles[font.get('filename')],
      isSelected ? styles.selected : null
    );

    return (
      <button className={classes} onClick={this._handleClick}>
        {font.get('name')}
      </button>
    );
  }

  _handleClick = () => {
    this.props.onSelect(this.props.font);
  };
}
