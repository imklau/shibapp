import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button';

import './app.css';

const App = () => (
  <Button>Search</Button>
);

ReactDOM.render(<App />, document.querySelector('#app'));
