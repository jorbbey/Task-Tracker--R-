import React from 'react'

const Button = ( { text, color, onClick } ) => {
     return <button className='btn'
          style={ { backgroundColor: color } }
          onClick={onClick}
     >{ text }</button>
}

export default Button
