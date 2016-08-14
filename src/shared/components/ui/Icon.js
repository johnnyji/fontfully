import React, {Component, PropTypes} from 'react';

export default class Icon extends Component {

  static displayName = 'Icon';

  static propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    style: PropTypes.object
  };

  static defaultProps = {
    size: 24
  };

  renderGraphic() {
    switch (this.props.icon) {
      case 'refresh':
        return (
          <g><path d="M17.65 6.35c-1.45-1.45-3.44-2.35-5.65-2.35-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78l-3.22 3.22h7v-7l-2.35 2.35z"></path></g>
        );
    }
  }

  render() {
    const styles = {
      fill: 'currentcolor',
      verticalAlign: 'middle',
      width: this.props.size, // CSS instead of the width attr to support non-pixel units
      height: this.props.size // Prevents scaling issue in IE
    };

    return (
      <svg
        viewBox='0 0 24 24'
        preserveAspectRatio='xMidYMid meet'
        fit
        style={Object.assign({}, styles, this.props.style)}>
        {this.renderGraphic()}
      </svg>
    );
  }

}
