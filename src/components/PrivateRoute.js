import React from "react";
import { Route, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { isAuthenticated } from  "../api/auth-helper"

const PrivateRoute = ({ component: Component, ...rest }) => {
    const history = useHistory();

    return (
        <Route
              {...rest}
              render={props => {
                if (!isAuthenticated()) return history.push('/');
    
                return <Component {...props} />;
              }}
            />
    )
    
}


PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
// scopes: PropTypes.array
};

// PrivateRoute.defaultProps = {
//   scopes: []
// };

export default PrivateRoute;
