import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const OrganizationDetails = () => {
  const { id } = useParams();
  const url = `http://localhost:8080/organizations/${id}`;
  const { data, isLoading, isError } = useFetch(url);

  return (
    <section className='organization-details'>
      <h1>Organization Details</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <h4>There was an error! Try again later</h4>}
      {data && <p>Name: {data.name}</p>}
    </section>
  );
};

export default OrganizationDetails;
