import { act } from "react-dom/test-utils";

export const useFormValidation = (data: any, setData: any, action: any) => {
  const formObject = {
    formValues: {
      ...data
    },
    formErrors: {
      ...data
    },
    formValidity: {
      ...data
    }
  };
  Object.keys(formObject.formErrors).forEach(function (item) {
    formObject.formErrors[item] = "";
  });
  Object.keys(formObject.formValidity).forEach(function (item) {
    formObject.formValidity[item] = false;
  });

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setData((prev: any) => ({ ...prev, [name]: value }));
    handleValidation(target);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { formValues, formValidity } = formObject;
    if (Object.values(formValidity).every(Boolean)) {
      action(...data)
    } else {
      console.log('error');
      for (let key in formValues) {
        let target = {
          name: key,
          value: formValues[key]
        };
        handleValidation(target);
      };
    }
  };

  const handleValidation = (target: any) => {
    const { name, value } = target;
    const { formErrors, formValidity } = formObject;
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //zrob switch case do tego

    const isEmail = name === "email"; //jesli name === email jest true to isEmail jest true
    const isPassword = name === "password";
    const isConfirmPassword = name === "password";

    formValidity[name] = value.length > 0;
    formErrors[name] = formValidity[name] //property formErrors jest rowne stringowi, ktory zalezy od tego czy ternary expression jest false czy true
      ? ""
      : `${name} is required and cannot be empty`;
  }; //tu setFormState

  return {
    handleChange,
    handleSubmit
  };
};


//moze returnowac obiekt z bledami??
//- latwo tworzyc akcje
//- musze pisac handlery dla kazdego komponentu (handlesubmit, handlechange)
//moge dodac errors do state oryginalnego (duzo powtarzalnego kodu)
//moge uzyc useState w hooku
//- jesli przesylam obiekt przez spread syntax to musze zmienic akcje na spread syntax
