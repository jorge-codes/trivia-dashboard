import React from 'react';
import { useState } from 'react';

const OrganizationCreate = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();
    console.log('adding new organization...');
    const organization = { name, address, country };
    createOrganization(organization);
  };

  const createOrganization = (organization) => {
    console.log(organization);

    setIsLoading(true);

    const url = 'http://localhost:8080/organizations';
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(organization),
    }).then(() => {
      setName('');
      setAddress('');
      setCountry('');
      setIsLoading(false);
    });
  };

  return (
    <section className='organization-create'>
      <h2>Create new organization</h2>
      <form onSubmit={handleCreate}>
        <div>
          <label htmlFor='name'>Name</label>
          <input name='name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor='address'>Address:</label>
          <input name='address' type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <label htmlFor='country'>Country:</label>
          <select name='country' value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value='US'>United States</option>
            <option value='CL'>Chile</option>
          </select>
        </div>
        <div>
          {!isLoading && <button type='submit'>Add {name && `"${name}"`}</button>}
          {isLoading && <button disabled>Adding...</button>}
        </div>
      </form>
    </section>
  );
};

export default OrganizationCreate;
