import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className='navbar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/organizations'>Organizations</Link>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
