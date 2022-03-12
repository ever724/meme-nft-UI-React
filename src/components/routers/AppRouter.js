// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES
import { HomePage } from '../pages/HomePage';
import {Sidebar} from '../Sidebar/Sidebar';

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment> 
            <Sidebar/>                   
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/nifty' component={HomePage} exact={true} /> 
                <Route path='/artists' component={HomePage} exact={true} /> 
                <Route path='/communities' component={HomePage} exact={true} />               
                <Route path='/meme' component={HomePage} exact={true} /> 
                <Route path='/drops' component={HomePage} exact={true} />
                <Redirect to="/" />
            </Switch>                      
        </Fragment>
    </BrowserRouter>
);