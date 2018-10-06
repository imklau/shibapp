import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Select from './components/Select/Select';

import './app.css';

const head = 'Select an option';
const options = [
  { id: 1, name: 'shibes' },
  { id: 2, name: 'cats' },
  { id: 3, name: 'dog' },
  { id: 4, name: 'random' },
];

const App = () => (
  <React.Fragment>
    <Button>Search</Button>
    <br />
    <Input type="number" />
    <Select head={head} options={options} />
  </React.Fragment>
);

ReactDOM.render(<App />, document.querySelector('#app'));
