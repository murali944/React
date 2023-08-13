import React from 'react'

const Functionclick = (props)=> {

    
   function clickHandler(){
    console.log('Button clicked')
    
   }
  return (
    <div>
      <button onClick={clickHandler}>{props.buttonName}</button>
    </div>
  );
}

export default Functionclick
