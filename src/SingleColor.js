import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index,hexColor }) => {
  const[alert,setAlert] = useState(false);
  //join use for separate the number of rgb
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`
  //use effect to display the copied info for 3 second and removed after
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false)
    },3000)
    return ()=>clearTimeout(timeout)
  },[alert])

  }
  return (
  // this part is setting the color in each block according to the rgb
  <article className={`color ${index>10 && 'color-light'}`} 
  style ={{backgroundColor =`rgb(${bcg}`}}
  //function to copy the information from the interface
  onClick={()=>{setAlert(true);
  navigator.clipboard.writeText(hexValue)}}
  >
  <p className='percent-value'>{weight}%</p>
  <p className='color-value'>{hexValue}</p>

  //if the value got copied it will display info
  {alert && <p className='alert'> copied to clipboard</p>}
  </article>);


export default SingleColor;
