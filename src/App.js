import { useEffect, useState } from 'react';
import CategoryList from './components/CategoryList';

function App() {
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    requestCategories();
  }, []);

  const requestCategories = () => {
    const url = 'http://localhost:8080/categories';
    setIsError(false);
    setIsLoading(true);

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setCategories(data);
      })
      .catch((err) => {
        console.error(err.message);
        setIsError(true);
        setIsLoading(false);
      });
  };

  const deleteCategory = (id) => {
    const newCategories = categories.filter((category) => category.id !== id);
    setCategories(newCategories);
  };

  return (
    <div className='App'>
      <h1>Trivia Dashboard</h1>
      {isLoading && <h4>Loading...</h4>}
      {isError && <h4>There was an error! Try again</h4>}
      {categories && <CategoryList title='Categories' categories={categories} deleteHandler={deleteCategory} />}
    </div>
  );
}

export default App;
