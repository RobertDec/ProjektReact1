import React, { useState, useEffect, useRef } from 'react';

function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  
  const changeTak = e => {
    setInput(e.target.value);
  };

  //nadawanie id dla każdej książki od 0
  const [id, setId] = useState(0);
    const giveId=()=>{
        setId(id + 1)
        return id;
    }

    //skrypt do zatwierdzania wprowadzania nazwy 
    const submitTak = (e)=> {
        e.preventDefault();

        props.onSubmit({
            id: giveId(),
            text:input
        });
         setInput(" ");

    };

      //wyswietlanie elementow formularza (przycisku i pole do wprowadzania)
  return (
    <form onSubmit={submitTak} className='b-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Nowa nazwa'
            value={input}
            onChange={changeTak}
            name='text'
            ref={inputRef}
            className='b-input edit'
          />
          <button onClick={submitTak} className='b-button edit'>
            Zaktualizuj
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Tytuł'
            value={input}
            onChange={changeTak}
            name='text'
            className='b-input'
            ref={inputRef}
          />
          <button onClick={submitTak} className='b-button'>
            Dodaj Książkę
          </button>
        </>
      )}
    </form>
  );
}

export default Form;