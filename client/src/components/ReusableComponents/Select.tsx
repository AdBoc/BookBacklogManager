import React from 'react';
import { BookListFilters, SortingOptions } from "../../ts/interfaces/interfaces";

interface IProps {
  options: BookListFilters;
  setValue: React.Dispatch<React.SetStateAction<SortingOptions>>
  name: string;
}

const Select: React.FC<IProps> = ({ options, setValue, name }) => {

  const handleChange = (e: any) => {
    const { value } = e.target;
    setValue((prev: any) => ({ ...prev, [name]: value }));
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