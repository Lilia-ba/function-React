import React, { useState } from 'react';
import './style.css';

function Compon5() {

   // const [firstname,setFirstname]  = useState("");
    const [borderRadius,setBorderRadius] =useState(0);
    const [text,setText] = useState("")
  //  const [color,setColor] = useState("")
  //  const [backgroundColor,setBackgroundColor] = useState('#FFFFFF')

    const handleChange5 =(e) => {
        setBorderRadius(e.target.value)
        };
        const compon5Style ={
            width:"100px",
            height:"100px",
            borderRadius: `${borderRadius}px`,
            backgroundColor:"red",
    
        }
        const handleClick5 = () => {
            setBorderRadius(<div></div>)
        }
        
       

    // const handleClick5 = ()  =>  {
      //  setBorderRadius()
   //  }

       //  const handleClick = () => {
       //  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); 
          //    setBackgroundColor(randomColor);


    

 return (
    <div className='compon5'>
        
        5
    
       <input type="number" value={borderRadius} onChange={handleChange5}></input>
       <div style={compon5Style}>Hello</div>
      
   

    
      
               
  





    </div>
    )
}
export default Compon5;