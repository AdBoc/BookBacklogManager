import React from 'react';
import { BookListFilters } from "../../ts/interfaces/interfaces";

interface IProps {
  options: BookListFilters;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  name: string;
}

const Select: React.FC<IProps> = ({ options, setValue, name }) => {

  const handleChange = (e: any) => {
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