import React from 'react';
import './full-name.css';
import {useState} from 'react';

function FullName() {
    const [firstname,setFirstname]  = useState("");
    const [lastname,setLastname]  = useState("");
    const [age,setAge]  = useState("");
    const [text,setText] = useState("");

   


    const handleChange1 =(e) => {
    setFirstname(e.target.value)
    }

    const handleChange2 =(e) => {
        setLastname(e.target.value)
   }

   const handleChange3 =(e) => {
    setAge(e.target.value)
}

    const handleClick1 = () => {
 setText(<p></p>)
 }
                




    return (
        <div className='full-name'>
            3
            <input type="text" value={firstname} onChange={handleChange1}></input>
            <input type="text" value={lastname} onChange={handleChange2}></input>
            <input type="text" value={age} onChange={handleChange3}></input>
            <button onClick={() => setText( `Barev dzez, im anunn e ${firstname},
                                                     im azganunn e ${lastname},
                                                                ev ${age} tarecan em`)}> 
                                                                Click Me</button>

                                                        
            <p> 
              {text}
            </p>


     
          

        </div>

    )
}
export default FullName;