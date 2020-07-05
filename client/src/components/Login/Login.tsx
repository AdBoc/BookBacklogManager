import React, { useState } from 'react';
import { useForms } from '../../hooks/useForms';
import { FormState } from '../../ts/interfaces/interfaces';
import { login } from '../../_helpers/apiService';

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
  const { handleChange, handleSubmit } = useForms(formState, setFormState, login);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email address</label>
        <input type="email" name="email" onChange={handleChange} placeholder="Email" />
        {formState.formErrors.email}
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} placeholder="Password" />
        {formState.formErrors.password}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login;