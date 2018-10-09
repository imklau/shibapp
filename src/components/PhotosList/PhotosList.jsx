import React from 'react';
import { arrayOf, string } from 'prop-types';

import './PhotosList.css';

const PhotosList = ({ photos }) => (
  <ul className="photos-list">
    {photos.map(photo => (
      <li key={photo} className="photos-list__item">
        <div className="photos-list__photo" style={{ backgroundImage: `url(${photo})` }} />
      </li>
    ))}
  </ul>
);

PhotosList.propTypes = {
  photos: arrayOf(string),
};

PhotosList.defaultProps = {
  photos: [],
};

export default PhotosList;
