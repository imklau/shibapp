import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

import './app.css';

const App = () => (
  <React.Fragment>
    <Button>Search</Button>
    <br />
    <Input type="number"/>
  </React.Fragment>
);

ReactDOM.render(<App />, document.querySelector('#app'));
