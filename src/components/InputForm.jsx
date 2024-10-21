// InputForm.jsx
import { useState } from 'react';
import Nota from './Nota.jsx';

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes guardar el dato como necesites
    console.log('Input Value:', inputValue);
    // Puedes hacer una llamada a una API, guardar en localStorage, etc.
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Escribe algo..." 
      />
      <Nota note={"Nota Maestro"} score={inputValue} />
    </form>
  );
};

export default InputForm;
