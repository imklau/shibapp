import React from 'react';
import ReactDOM from 'react-dom';
import PhotosList from './components/PhotosList/PhotosList';
import Form from './components/Form/Form';

import './app.css';

const photos = ['https://images.pexels.com/photos/426894/pexels-photo-426894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/571150/pexels-photo-571150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/1292684/pexels-photo-1292684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'];

const App = () => (
  <React.Fragment>
    <Form />
    <PhotosList photos={photos} />
  </React.Fragment>
);

ReactDOM.render(<App />, document.querySelector('#app'));
