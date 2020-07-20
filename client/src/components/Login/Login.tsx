import React, { useState } from 'react';
import { useForms } from '../../hooks/useForms';
import { FormState } from '../../ts/interfaces/interfaces';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/User/actions';
import { Link } from 'react-router-dom';
import './Login.scss'

const Login: React.FC = (): JSX.Element => {
  const [formState, setFormState] = useState<FormState>({
    formValues: {
      email: "",
      password: ""
    },
    formErrors: {
      email: "",
      password: ""
    },
    formValidity: {
      email: false,
      password: false
    }
  });
  const { handleChange, handleValidation } = useForms(formState, setFormState);
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { formValues, formValidity } = formState;
    if (Object.values(formValidity).every(Boolean)) {
      dispatch(login(formValues.email, formValues.password));
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
    <>
      <form className="Login" onSubmit={handleSubmit}>
        <label className="Login__label">Email address</label>
        <input className="Login__input" type="email" name="email" onChange={handleChange} placeholder="Email" />
        {formState.formErrors.email}
        <label className="Login__label">Password</label>
        <input className="Login__input" type="password" name="password" onChange={handleChange} placeholder="Password" />
        {formState.formErrors.password}
        <button className="Login__button" type="submit">Submit</button>
      </form>
      <p className="Login__createAccount">No Account?<Link className="Login__createAccount__link" to="/register">Sign up</Link></p>
    </>
  )
}

export default Login;