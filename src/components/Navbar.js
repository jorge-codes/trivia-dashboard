import React from 'react';

const Navbar = () => {
  return (
    <section className='navbar'>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/organizations'>Organizations</a>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
