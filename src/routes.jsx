import React from 'react';
import {
  Switch,
  Router,
  Route,
} from 'react-router-dom';
import Home from './Views/Home';
import { createBrowserHistory } from "history";
import Layout from './Components/Layout';
import UserList from './Views/UsersList';

const history = createBrowserHistory()

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/lista-de-usuarios" component={UserList} />
                </Layout>
            </Switch>
        </Router>
    )
}

export default Routes
