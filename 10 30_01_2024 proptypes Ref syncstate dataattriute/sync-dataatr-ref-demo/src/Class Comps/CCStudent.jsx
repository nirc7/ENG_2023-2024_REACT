import { Component } from 'react';

import PropTypes from 'prop-types';

export default class CCStudent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>CCStudent <br />
        name={this.props.name} <br />
        grade={this.props.grade}
      </div>
    )
  }
}

CCStudent.propTypes = {
  name: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired
};
