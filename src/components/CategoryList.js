import React from 'react';

const CategoryList = ({ title, categories, deleteHandler }) => {
  return (
    <section className='category-list'>
      {title && <h2>{title}</h2>}
      {categories.map((item) => (
        <h3 key={item.id}>
          {item.name} <button onClick={() => deleteHandler(item.id)}>X</button>
        </h3>
      ))}
    </section>
  );
};

export default CategoryList;
