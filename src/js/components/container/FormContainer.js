import React from 'react';
import ReactDOM from 'react-dom';

class FormContainer extends Component {
  consturctor () {
    super();

    this.state = {
      title: ''
    };
  }

  render() {
    return (
      <div>
      <form id="input-box">
      </form>
      </div>
    )
  }
}

export default FormContainer;
