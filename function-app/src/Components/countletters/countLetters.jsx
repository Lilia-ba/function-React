import React, { useState } from 'react';

function WordLength() {
  const [word, setWord] = useState('');

  const handleChange = (event) => {
    setWord(event.target.value);
  };

  const handleButtonClick = () => {
    alert(`The word "${word}" has ${word.length} letters.`);
  };
  
  

  return (
    <div>
        6
      <input type="text" value={word} onChange={handleChange} />
      <button onClick={handleButtonClick}>Count Letters</button>
     
      <div> {word.length}</div>
      <p>{word}</p>
    </div>
  );
}

export default WordLength;
