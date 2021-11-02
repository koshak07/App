import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainContextProvider from './contexts/MainContext';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';

const Routes = () => {
    return (
        <MainContextProvider>

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/create" component={CreatePage} />
            <Redirect to="/"/>

        </Switch>
    </BrowserRouter>
        </MainContextProvider>
    );
};

export default Routes;