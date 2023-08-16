import React from 'react'

const SonComponent = (props) => {
  return (
    <div>
      <button onClick={()=>{props.greetHandler('Pedapati vamsam')}}>Wish Family</button>
    </div>
  )
}
export default SonComponent
