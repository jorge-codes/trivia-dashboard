import React from 'react';
import CategoryList from '../components/CategoryList';
import useFetch from '../hooks/useFetch';

const CategoriesView = () => {
  const categoriesUrl = 'http://localhost:8000/categories';
  const { data: categories, isLoading, isError } = useFetch(categoriesUrl);

  return (
    <section className='categories'>
      {isLoading && <h4>Loading...</h4>}
      {isError && <h4>There was an error! Try again later</h4>}
      {categories && <CategoryList title='Categories' categories={categories} />}
    </section>
  );
};

export default CategoriesView;
