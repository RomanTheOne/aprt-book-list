import React from 'react'
import {number, func} from 'prop-types'

const DropDown = ({dropDownOption, onChange}) => {
  return(
    <select value={dropDownOption} onChange={onChange}>
      <option value={1}>1</option>
      <option value={5}>5</option>
      <option value={10}>10</option>
    </select>
  )
};

DropDown.propTypes = {
  value: number.isRequired,
  onChange: func.isRequired,
};

export default DropDown;
