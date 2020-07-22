import React from 'react';
import { login } from '../../redux/User/actions';
import { Link } from 'react-router-dom';
import { useFormValidation } from '../../hooks/FormValidation';
import { useDispatch } from 'react-redux';

const Login: React.FC = (): JSX.Element => {
  const credentials = {
    email: "",
    password: ""
  };
  const dispatch = useDispatch();
  const { handleChange, submitValidity, data } = useFormValidation(credentials);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (submitValidity()) dispatch(login(data.formValues.email, data.formValues.password));
  };

  return (
    <form className="Login" onSubmit={handleSubmit}>
      <h1 className="Login__mainText">LOGIN</h1>
      <input
        className={"Login__input" + (data.formErrors.email ? " Login__input--error" : "")}
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />
      {data.formErrors.email && <p className="error">{data.formErrors.email}</p>}
      <input
        className={"Login__input" + (data.formErrors.password ? " Login__input--error" : "")}
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />
      {data.formErrors.password && <p className="error">{data.formErrors.password}</p>}
      <input className="Login__button" type="submit" value="LOGIN"/>
      {/* <button className="Login__button" type="submit">Submit</button> */}
      <p className="Login__createAccount">No Account?<Link className="Login__createAccount__link" to="/register">Sign up</Link></p>
    </form>
  )
}

export default Login; //walidacja po name danego jsx taga (np. input name="password" jest validowane jak password)
