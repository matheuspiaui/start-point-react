import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

// Style Global -- add bulma
import './assets/style-global.scss'

// Pages
import App from './pages/app/App';
import FormRedux from './pages/exemplo-redux-form';
import BulmaPage from './pages/bulma/index'

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
                <RouteWithLayout path="/bulma" component={BulmaPage}/>
                {/* <RouteWithLayout layout={CidadaoLayout} path="/" component={App}/> */}
                    
            </Switch>
        </Router>
    </Provider>

, 
  document.getElementById('root'));
  
registerServiceWorker();
