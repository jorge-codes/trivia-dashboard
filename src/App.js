import { useEffect, useState } from 'react';
import CategoryList from './components/CategoryList';

function App() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const url = 'http://localhost:8080/categories';
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const deleteCategory = (id) => {
    const newCategories = categories.filter((category) => category.id !== id);
    setCategories(newCategories);
  };

  return (
    <div className='App'>
      <h1>Trivia Dashboard</h1>
      {categories && <CategoryList title='Categories' categories={categories} deleteHandler={deleteCategory} />}
    </div>
  );
}

export default App;
