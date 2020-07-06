import { FormState } from '../ts/interfaces/interfaces';

export const useForms = (formState: FormState, setFormState: React.Dispatch<React.SetStateAction<FormState>>) => {

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    const { formValues } = formState;
    formValues[name] = value;
    setFormState(prev => ({ ...prev, formValues })); // setFormState({ formValues });
    handleValidation(target);
  };

  const handleValidation = (target: any) => {
    const { name, value } = target;
    const fieldValidationErrors = formState.formErrors;
    const validity = formState.formValidity;
    const isEmail = name === "email";
    const isPassword = name === "password";
    const isConfirmPassword = name === "confirmPassword";
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    validity[name] = value.length > 0;
    fieldValidationErrors[name] = validity[name] //pole field validaiton errors jest rowne wynikowi stringa 
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
      if (isConfirmPassword) {
        validity[name] = value === formState.formValues.password;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : "passwords must be the same";
      }
    };

    setFormState({
      ...formState,
      formErrors: fieldValidationErrors,
      formValidity: validity
    });
  }

  return {
    handleChange,
    handleValidation
  }
};