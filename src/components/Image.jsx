import React from 'react';
import PropTypes from 'prop-types';

const Image = ({alt, src}) => (
  <figure className="image is-2by1">
    <img alt={alt} src={src}/>
  </figure>
);

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string
};

export default Image;
