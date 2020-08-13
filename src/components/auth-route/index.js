import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function AuthRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(props) =>
        authed === true ? (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Component {...props} />
        ) : (
          // eslint-disable-next-line react/jsx-no-undef
          <Redirect
            to={{ pathname: '/unaouthorized', state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default AuthRoute;
