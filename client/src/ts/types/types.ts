export type ContextProps = {
  children: React.ReactNode;
};

export type InitialState = {
  isLogged: boolean;
  token: string;
};

export type AuthActionTypes = { type: "LOGIN_SUCCESS" };
