import React from 'react';

const Select = ({ options, setValue, name }) => {

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
      <p>{name}</p>
      <select onChange={handleChange}>
        {options.map((item, index) => {
          return (
            <option key={index} value={item.value}>{item.label}</option>
          )
        })}
      </select>
    </>
  )
}

export default Select;