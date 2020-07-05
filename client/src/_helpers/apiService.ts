import axios from "axios";

export async function register(email: string, password: string) {
  try {
    await axios.post("http://localhost:8000/api/user/create", {
      email,
      password,
    });
  } catch (error) {
    if (error.message === "Request failed with status code 403")
      return "Email or Username already exists";
    return error;
  }
}

export function login(email: string, password: string) {
  axios
    .post(
      "http://localhost:8000/api/user/login",
      {},
      {
        auth: {
          username: email,
          password,
        },
      }
    )
    .then((response) => {
      const token: string = response.data.token;
      localStorage.setItem("token", JSON.stringify(token));
      return null;
    })
    .catch((error) => {
      return null;
    });
}
