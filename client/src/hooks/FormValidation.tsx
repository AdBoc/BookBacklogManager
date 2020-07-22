import { useState } from 'react';

export const useFormValidation = (initialData: any) => {
  const formObject = {
    formValues: {
      ...initialData
    },
    formErrors: {
      ...initialData
    },
    formValidity: {
      ...initialData
    }
  };
  Object.keys(formObject.formErrors).forEach(function (item) {
    formObject.formErrors[item] = "";
  });
  Object.keys(formObject.formValidity).forEach(function (item) {
    formObject.formValidity[item] === "" ? formObject.formValidity[item] = false : formObject.formValidity[item] = true;
  });

  const [data, setData] = useState(formObject);

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    const { formValues } = data;
    formValues[name] = value;
    setData(prev => ({ ...prev, formValues }));
    handleValidation(target);
  };

  const handleSelect = ({ target }: any) => {
    const { name, value } = target;
    const { formValues } = data;
    formValues[name] = value;
    setData(prev => ({ ...prev, formValues }));
  };

  const submitValidity = () => {
    const { formValues, formValidity } = data;
    for (let key in formValues) {
      let target = {
        name: key,
        value: formValues[key]
      };
      handleValidation(target);
    };
    if (Object.values(formValidity).every(Boolean))
      return 1;
    return 0;
  };

  const handleValidation = (target: { name: string, value: string }) => {
    const { name, value } = target;
    const formValidity = data.formValidity;
    const formErrors = data.formErrors;

    formValidity[name] = value.length > 0;
    formErrors[name] = formValidity[name] //property formErrors jest rowne stringowi, ktory zalezy od tego czy ternary expression jest false czy true
      ? ""
      : `${name} is required and cannot be empty`;
    switch (name) {
      case 'email':
        formValidity[name] = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);
        formErrors[name] = formValidity[name]
          ? ""
          : `${name} is not valid`;
        break;
      case 'password':
        formValidity[name] = value.length >= 6;
        formErrors[name] = formValidity[name]
          ? ""
          : `${name} should be at least 6 characters`;
        break;
      case 'confirmPassword':
        formValidity[name] = value === data.formValues.password;
        formErrors[name] = formValidity[name]
          ? ""
          : "passwords must be the same";
        break;
      // case "title":
      // case "author":
      //   formValidity[name] = value.length >= 1;
      //   formErrors[name] = formValidity[name]
      //     ? ""
      //     : `${name} field cannot be empty`;
      //   break;
      default:
        formValidity[name] = true;
        formErrors[name] = "";
    }

    setData({
      ...data,
      formErrors,
      formValidity
    });
  };

  return {
    handleChange,
    handleSelect,
    submitValidity,
    data
  };
};
