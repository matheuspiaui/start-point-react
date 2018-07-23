import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/app/App';

import registerServiceWorker from './registerServiceWorker';
import WebFontLoader from 'webfontloader';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import FormRedux from './pages/exemplo-redux-form';

WebFontLoader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons'],
    },
});

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

ReactDOM.render(  
    <Provider store={store}>
        <Router>
            <Switch>
                <RouteWithLayout exact path="/" component={App}/>
                <RouteWithLayout path="/redux-form" component={FormRedux}/>
                {/* <RouteWithLayout layout={CidadaoLayout} path="/" component={App}/> */}
                    
            </Switch>
        </Router>
    </Provider>

, 
  document.getElementById('root'));
  
registerServiceWorker();
