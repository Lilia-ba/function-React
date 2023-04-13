import React from "react";


function Colorbox(props) {

const isRed = props.isRed;


    return (
    
              <div  className="box-yellow" style={{backgroundColor:props.css,  
                                      width:props.width,
                                      height:props.height}}> {props.isYellow}
                            1  HELLO       
                
                   <div>1{ props.nani}</div>

                
              </div>
    )
}
export default Colorbox