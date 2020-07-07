import React from 'react';
import { BookStateObject } from '../../redux/Books/interfaces';

interface IProps {
  object: BookStateObject;
  submit: (e: any) => void;
  handleChange: (e: any) => void;
}

const Form: React.FC<IProps> = ({ object, submit, handleChange }) => {
  return (
    <form onSubmit={submit}>
      {Object.keys(object).filter((item) => { if (item !== 'dateCreated' && item !== 'status') return item; return null }).map((item, index) => {
        return (
          <input key={index} onChange={handleChange} type="text" placeholder={item} name={item} required />
        )
      })}
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Form;