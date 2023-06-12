import React from 'react';
import { useState } from 'react';
import CategoryList from '../components/CategoryList';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const url = 'http://localhost:8080/categories';
  const [, setCategories] = useState(null);
  const { data: categories, isLoading, isError } = useFetch(url);

  const deleteCategory = (id) => {
    const newCategories = categories.filter((category) => category.id !== id);
    setCategories(newCategories);
  };

  return (
    <section className='home'>
      <h1>Trivia Dashboard</h1>
      {isLoading && <h4>Loading...</h4>}
      {isError && <h4>There was an error! Try again</h4>}
      {categories && <CategoryList title='Categories' categories={categories} deleteHandler={deleteCategory} />}
    </section>
  );
};

export default Home;
