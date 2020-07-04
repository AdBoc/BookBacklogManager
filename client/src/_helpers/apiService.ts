import axios from "axios";

// class ApiService {
//   async register(login: any, email: any, password: any) {
//     try {
//       const resposne = await axios.post(
//         "http://localhost:8000/api/user/register",
//         {
//           login,
//           email,
//           password,
//         }
//       );
//       console.log("user registered");
//       return resposne;
//     } catch (error) {
//       if (error.message === "Request failed with status code 403")
//         return "Email or Username already exists";
//       console.log(error.message);
//       return error;
//     }
//   }
//   login() {}
//   logout() {}
// }

// const apiService = new ApiService();
// export default apiService;

// export async function register(email: any, password: any) {
//   try {
//     const resposne = await axios.post(
//       "http://localhost:8000/api/user/create",
//       {
//         email,
//         password,
//       }
//     );
//     console.log("user registered");
//     return resposne;
//   } catch (error) {
//     if (error.message === "Request failed with status code 403")
//       return "Email or Username already exists";
//     console.log(error.message);
//     return error;
//   }
// }

export async function register(email: any, password: any) {
  try {
    const resposne = await axios.post("http://localhost:8000/api/user/create", {
      email: "witek@witek.witekaaagaaa",
      password: "witekwiteksadaaaaaa",
    });
    console.log("user registered");
    return resposne;
  } catch (error) {
    if (error.message === "Request failed with status code 403")
      return "Email or Username already exists";
    console.log(error.message);
    return error;
  }
}
