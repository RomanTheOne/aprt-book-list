import React from 'react'
import './book.css'

const Book = ({ id, title, description, onClick }) => {
  return(
    <div className='bookCard'>
      <div>
        <h5>{title}</h5>
        <h6>{description}</h6>
      </div>

      <button data-id={id} onClick={onClick}>Retitle</button>
    </div>
  )
};

export default Book
