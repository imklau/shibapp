import React from 'react';
import ReactDOM from 'react-dom';
import PhotosList from './components/PhotosList/PhotosList';
import Form from './components/Form/Form';

import './app.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }

  handleSubmit = (photos) => {
    this.setState({
      photos,
    });
  }

  render() {
    const { photos } = this.state;

    return (
      <React.Fragment>
        <Form handleSubmit={this.handleSubmit} />
        <PhotosList photos={photos} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
