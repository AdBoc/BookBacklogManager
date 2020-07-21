import React, { useState } from 'react';
// import { useFormValidation } from '../../hooks/FormValidation';
// import { FormState } from '../../ts/interfaces/interfaces';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/User/actions';
import { Link } from 'react-router-dom';
import './Login.scss'
import { useFormValidation } from '../../hooks/FormValidation';

interface CredentialsForm {
  email: string;
  password: string;
} //ewentualnie zrobic credentials wartosc error ktora jest setowana w hooku

const Login: React.FC = (): JSX.Element => {
  const [credentials, setCredentials] = useState<CredentialsForm>({
    email: "",
    password: ""
  });
  const { handleChange, handleSubmit } = useFormValidation(credentials, setCredentials, login);

  return (
    <>
      <form className="Login" onSubmit={handleSubmit}>
        <label className="Login__label">Email address</label>
        <input className="Login__input" type="email" name="email" onChange={handleChange} placeholder="Email" />
        {/* {formState.formErrors.email} */}
        <label className="Login__label">Password</label>
        <input className="Login__input" type="password" name="password" onChange={handleChange} placeholder="Password" />
        {/* {formState.formErrors.password} */}
        <button className="Login__button" type="submit">Submit</button>
      </form>
      <p className="Login__createAccount">No Account?<Link className="Login__createAccount__link" to="/register">Sign up</Link></p>
    </>
  )
}

export default Login;
//walidacja po name danego jsx taga (np. input name="password" jest validowane jak password)
