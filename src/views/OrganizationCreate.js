import React from 'react';

const OrganizationCreate = () => {
  const handleCreate = (evt) => {
    evt.preventDefault();
    console.log('adding new organization...');
  };

  return (
    <section className='organization-create'>
      <h2>Create new organization</h2>
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input name='name' type='text' />
        </div>
        <div>
          <label htmlFor='address'>Address:</label>
          <input name='address' type='text' />
        </div>
        <div>
          <button onClick={handleCreate} type='submit'>
            Add
          </button>
        </div>
      </form>
    </section>
  );
};

export default OrganizationCreate;
