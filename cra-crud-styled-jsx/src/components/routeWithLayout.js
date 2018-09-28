import React from 'react';
import { Route } from "react-router-dom";

const RouteWithLayout = ({layout, component, ...rest}) => {
    return (
        (layout ? 
            <Route {...rest} render={(props) =>
                React.createElement( layout, props, React.createElement(component, props))
            }/> 
        : 
            <Route {...rest} component={component} /> 
        )
    )
};

export default RouteWithLayout;