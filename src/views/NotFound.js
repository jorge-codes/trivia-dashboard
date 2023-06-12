import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Sorry! Page cannot be found</h1>
      <h4>
        <Link to='/'>Go home</Link>
      </h4>
      <img height='300px' src='404-robot.jpeg' alt='404 not found' />
    </div>
  );
};

export default NotFound;
