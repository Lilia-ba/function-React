import React from 'react';
import {useState} from 'react';

function Toupper() {
    const [firstname,setFirstname]  = useState("");
    const [text1,setText] = useState("");
    const handleChange1 =(e) => {
        setFirstname(e.target.value)
        }
    
     

     return (
        <div className='full-name'>
            4
              <input type="text" value={firstname} onChange={handleChange1}></input>
              <button onClick={() => setText( ` ${firstname}`)}> 
                                                Click Me</button>
              <p> 
                  {text1.toUpperCase()}
              </p>
              <p>
                {text1.length}
              </p>
       </div>

    )
}
export default Toupper;