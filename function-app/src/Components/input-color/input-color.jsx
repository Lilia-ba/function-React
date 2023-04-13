import React, { useState } from 'react';
import './input-color.css'

function InputColor() {

    const [color,setColor] = useState("")
    
    const [backgroundColor,setBackgroundColor] = useState('#FFFFFF');

    const handleClick = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); 
        setBackgroundColor(randomColor);
    }

 return (
     
    <div className='colorChange'   style={{backgroundColor}}>
        2
       {color}
       / <input type="text"
               value={color}
               onChange={(evt) => setColor(evt.target.value)}></input>
        <button  onClick={handleClick}>Change The Color</button>
    </div>
    )
}
export default InputColor;