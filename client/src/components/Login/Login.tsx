import React, { useState } from 'react'

// interface FormState {
//   formValues: {
//     email: string;
//     password: string;
//     [index: string]: string;
//   };
//   formErrors?: {
//     email: string;
//     password: string;
//     [index: string]: string;
//   };
//   formValidity?: {
//     email: boolean;
//     password: boolean;
//   };
// }

const Login: React.FC = (): JSX.Element => {

  const [formState, setFormState] = useState<any>({
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

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    const { formValues } = formState;
    formValues[name] = value;
    setFormState({ formValues });
    handleValidation(target);
  };

  const handleValidation = (target: any) => {
    const { name, value } = target;
    const fieldValidationErrors = formState.formErrors;
    const validity = formState.formValidity;
    const isEmail = name === "email";
    const isPassword = name === "password";
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    validity[name] = value.length > 0;
    fieldValidationErrors[name] = validity[name]
      ? ""
      : `${name} is required and cannot be empty`;

    if (validity[name]) {
      if (isEmail) {
        validity[name] = emailTest.test(value);
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be a valid email address`;
      }
      if (isPassword) {
        validity[name] = value.length >= 3;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be 3 characters minimum`;
      }
    };

    setFormState({
      ...formState,
      formErrors: fieldValidationErrors,
      formValidity: validity
    });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { formValues, formValidity } = formState;
    if (Object.values(formValidity).every(Boolean)) {
      console.log(formValues);
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email address</label>
        <input type="email" name="email" onChange={handleChange} placeholder="Email" />
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login;