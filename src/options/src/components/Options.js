import React, {Component} from 'react';
import pureRender from 'pure-render-decorator';

@pureRender
export default class Options extends Component {

  static displayName = 'Options';

  render() {
    return (
      <div>
        Hello
      </div>
    );
  }

}
