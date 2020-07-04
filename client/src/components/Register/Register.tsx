import React, { useState } from 'react'
import { useForms } from '../../hooks/useForms';
import { FormState } from '../../ts/interfaces/interfaces';
import { register } from '../../_helpers/apiService';

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
  const { handleChange, handleSubmit } = useForms(formState, setFormState, register);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email address</label>
        <input type="email" name="email" onChange={handleChange} placeholder="Email" />
        {formState.formErrors.email}
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} placeholder="Password" />
        {formState.formErrors.password}
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" onChange={handleChange} placeholder="Confirm password" />
        {formState.formErrors.confirmPassword}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Register;
