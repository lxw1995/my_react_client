import React from 'react';
import {withRouter} from 'react-router-dom';

class Child2 extends React.Component {
  render() {
    return (
      <div className="Child2">
        <h3>Child</h3>
      </div>
    )
  }
}

export default withRouter(Child2)