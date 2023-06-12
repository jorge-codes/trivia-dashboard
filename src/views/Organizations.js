import React from 'react';
import useFetch from '../hooks/useFetch';
import OrganizationList from '../components/OrganizationList';

const Organizations = () => {
  const url = 'http://localhost:8080/organizations';
  const { data: organizations, isLoading, isError } = useFetch(url);

  return (
    <section className='organization'>
      <h2>Organizations</h2>
      {isLoading && <h4>Loading...</h4>}
      {isError && <h4>There was an error! Try again later</h4>}
      {organizations && <OrganizationList title='List' organizations={organizations} />}
    </section>
  );
};

export default Organizations;
