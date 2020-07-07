import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreType } from "../ts/interfaces/interfaces";

interface IProps extends RouteProps {
  component: React.ComponentType<any>;
  exact?: boolean;
  path: string;
}

const PublicRoute = ({ component: Component, ...rest }: IProps) => {
  const isLogged = useSelector((store: StoreType) => store.user.isLogged);
  return (
    <div>
      {isLogged !== null ? (
        <Route
          {...rest}
          render={(props) =>
            isLogged ? <Redirect to="/" /> : <Component {...props} />
          }
        />
      ) : null}
    </div>
  );
};

export default PublicRoute;
