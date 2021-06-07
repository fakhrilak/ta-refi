import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const UserRoute = ({
  component: Component,
  auth: { isAuthenticated,loading,token},
  ...rest
}) => {
  return (
    <Route
    {...rest}
    render={(props) =>
      isAuthenticated === null || loading ? (
        <Component {...props} />
      ) : !isAuthenticated ? (
        <Redirect to="/login" />
      ) : (
        <Redirect to="/dashboard" />
      )}
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(UserRoute);