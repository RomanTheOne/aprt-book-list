import React from 'react'
import { number, string, func} from 'prop-types'

import './book.css'

const Book = ({ id, title, description, onClick }) => {
  return(
    <div className='bookCard'>
      <div>
        <h5>{title}</h5>
        <h6>{description}</h6>
      </div>

      <button data-id={id} onClick={onClick}>R</button>
    </div>
  )
};

Book.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  onClick: func.isRequired,
};

export default Book
