import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import OrganizationList from '../components/OrganizationList';

const Organizations = () => {
  const url = 'http://localhost:8080/organizations';
  const { data: organizations, isLoading, isError } = useFetch(url);

  return (
    <section className='organization'>
      <h2>Organizations</h2>
      <Link to='/organizations/create'>
        <button>Create new</button>
      </Link>
      {isLoading && <h4>Loading...</h4>}
      {isError && <h4>There was an error! Try again later</h4>}
      {organizations && <OrganizationList title='List' organizations={organizations} />}
    </section>
  );
};

export default Organizations;
