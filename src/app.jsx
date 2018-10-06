import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Select from './components/Select/Select';
import PhotosList from './components/PhotosList/PhotosList';

import './app.css';

const head = 'Select an option';
const options = [
  { id: 1, name: 'shibes' },
  { id: 2, name: 'cats' },
  { id: 3, name: 'dog' },
  { id: 4, name: 'random' },
];

const photos = ['https://images.pexels.com/photos/426894/pexels-photo-426894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/571150/pexels-photo-571150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/1292684/pexels-photo-1292684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'];

const App = () => (
  <React.Fragment>
    <Button>Search</Button>
    <br />
    <Input type="number" />
    <Select head={head} options={options} />
    <PhotosList photos={photos} />
  </React.Fragment>
);

ReactDOM.render(<App />, document.querySelector('#app'));
