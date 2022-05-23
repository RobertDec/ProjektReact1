import React, { useState } from 'react';
import Form from './Form';
//żeby 2 poniższe importy działały należy pobrać React-Icons
import { RiCloseCircleLine } from 'react-icons/ri'; //zaimportowanie ikony edycji 
import { TiEdit } from 'react-icons/ti';  //zaimportowanie ikony edycji 

//utworzenie ksiązki która posiada nazwe oraz id
const Books = ({ booklist, removeBook, updateList }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  //zatwierdzanie zamian
  const submitUpdate = value => {
    updateList(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  //zwracanie do przeglądarki mapy która nazwy książki
  return booklist.map((books, index) => (
    
    <div className={'b-row'} >
      
      <div key={books.id} > 
        {books.id}
        . 
        {books.text}
      </div>
          <div className='icons'>
            <RiCloseCircleLine
              onClick={() => removeBook(books.id)}
              className='delete-icon'
            />
            <TiEdit
              onClick={() => setEdit({ id: books.id, value: books.text })}
              className='edit-icon'
            />
          </div>
    </div>
  ));
};

export default Books;