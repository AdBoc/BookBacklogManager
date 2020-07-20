import React, { useState } from 'react'
import { useForms } from '../../hooks/useForms';
import { FormState } from '../../ts/interfaces/interfaces';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/User/actions';
import './Register.scss';

const Register: React.FC = (): JSX.Element => {
  const [formState, setFormState] = useState<FormState>({
    formValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    formErrors: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    formValidity: {
      email: false,
      password: false,
      confirmPassword: false
    }
  });
  const { handleChange, handleValidation } = useForms(formState, setFormState);
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { formValues, formValidity } = formState;
    if (Object.values(formValidity).every(Boolean)) {
      dispatch(register(formValues.email, formValues.password));
    } else {
      for (let key in formValues) {
        let target = {
          name: key,
          value: formValues[key]
        };
        handleValidation(target);
      }
    }
  };

  return (
    <form className="Register" onSubmit={handleSubmit}>
      <label className="Register__label">Email address</label>
      <input className="Register__input" type="email" name="email" onChange={handleChange} placeholder="Email" />
      {formState.formErrors.email}
      <label className="Register__label">Password</label>
      <input className="Register__input" type="password" name="password" onChange={handleChange} placeholder="Password" />
      {formState.formErrors.password}
      <label className="Register__label">Confirm Password</label>
      <input className="Register__input" type="password" name="confirmPassword" onChange={handleChange} placeholder="Confirm password" />
      {formState.formErrors.confirmPassword}
      <button className="Register__button" type="submit">Submit</button>
    </form>
  )
}

export default Register;
