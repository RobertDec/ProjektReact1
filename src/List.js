import React, { useState } from 'react';
import Form from './Form';
import Books from './Main';

function List() {
  const [booklist, setbooklist] = useState([]);
  
//addToList dodaje element to listy
  const addToList = books => {
    if (!books.text || /^\s*$/.test(books.text)) {
      return;
    }

    const newbooklist = [books, ...booklist];

    setbooklist(newbooklist);
    console.log(...booklist);
  };

  // updateList zmienia nazwe elementu 
  const updateList = (booksId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setbooklist(prev => prev.map(item => (item.id === booksId ? newValue : item)));
  };

  //removeBook usuwa daną ksiażkę
  const removeBook = id => {
    const removedArr = [...booklist].filter(books => books.id !== id);

    setbooklist(removedArr);
  };

  //wyświetlanie formularza
  return (
    <>
      <h1>Co ciekawego w ostanim czasie przeczytałeś/łaś ?</h1>
      <Form onSubmit={addToList} />
      <Books
        booklist={booklist}
        removeBook={removeBook}
        updateList={updateList}
      />
    </>
  );
}

export default List;