import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/User/actions';
import { useFormValidation } from '../../hooks/FormValidation';
import './Register.scss';

const Register: React.FC = (): JSX.Element => {
  const credentials = {
    email: "",
    password: "",
    confirmPassword: ""
  };

  const dispatch = useDispatch();
  const { handleChange, submitValidity, data } = useFormValidation(credentials);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (submitValidity()) dispatch(register(data.formValues.email, data.formValues.password));
  }

  return (
    <form className="Register" onSubmit={handleSubmit}>
      <h1 className="Register__mainText">REGISTER</h1>
      <input
        className="Register__input"
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />
      {data.formErrors.email && <p className="error">{data.formErrors.email}</p>}
      <input
        className={data.formErrors.password ? "Register__input--error" : "Register__input"}
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />
      {data.formErrors.password && <p className="error">{data.formErrors.password}</p>}
      <input
        className={data.formErrors.confirmPassword ? "Register__input--error" : "Register__input"}
        type="password"
        name="confirmPassword"
        onChange={handleChange}
        placeholder="Confirm password"
      />
      {data.formErrors.confirmPassword && <p className="error">{data.formErrors.confirmPassword}</p>}
      <button className="Register__button" type="submit">Submit</button>
    </form>
  )
}

export default Register;