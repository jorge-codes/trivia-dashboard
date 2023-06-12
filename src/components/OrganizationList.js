import React from 'react';
import { Link } from 'react-router-dom';

const OrganizationList = ({ title, organizations }) => {
  return (
    <section className='organization-list'>
      {title && <h2>{title}</h2>}
      <ul>
        {organizations.map((item) => (
          <li key={item.id}>
            <Link to={'/organizations/' + item.id}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OrganizationList;
