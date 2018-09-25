import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
// Internal components
import RouteWithLayout from './components/routeWithLayout';
// Pages
import App from './pages/app/App';
import BulmaPage from './pages/bulma/BulmaPage';
// Style Global -- add bulma
import './assets/style-global.css'


/* ----------------------- ROOT ------------------------- */

ReactDOM.render(  
    <Provider store={store}>
        <Router>
            <Switch>
                <RouteWithLayout exact path="/" component={App}/>
                {/* <RouteWithLayout path="/redux-form" component={FormRedux}/> */}
                <RouteWithLayout path="/bulma" component={BulmaPage}/>
                {/* <RouteWithLayout layout={CidadaoLayout} path="/" component={App}/> */} 
            </Switch>
        </Router>
    </Provider>

, 
  document.getElementById('root'));
  
registerServiceWorker();



