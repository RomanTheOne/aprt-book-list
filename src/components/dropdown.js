import React from 'react'

const DropDown = ({dropDownOption, onChange}) => {
  return(
    <select value={dropDownOption} onChange={onChange}>
      <option value={1}>1</option>
      <option value={5}>5</option>
      <option value={10}>10</option>
    </select>
  )
};

export default DropDown;
