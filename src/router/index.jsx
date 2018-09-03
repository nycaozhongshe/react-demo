/*
 * @Author: caozhongshe 
 * @Date: 2018-08-31 11:29:18 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-09-03 16:11:04
 */



import React, { Component } from 'react'

import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { asyncComponent } from "@/components/AsyncComponent";

import App from "@/App.jsx";
const Layout = asyncComponent(() => import('@/laout/index.jsx'))
const Login = asyncComponent(() => import('@/views/login/index.jsx'))
const Index = asyncComponent(() => import('@/views/index/index.jsx'))
const Tab = asyncComponent(() => import('@/views/tab/index.jsx'))

const Table = asyncComponent(() => import('@/views/table/index.jsx'))


export default class ERouter extends Component {

  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" render={() =>
              <Layout>
                <Switch>
                  <Route path='/index' component={Index} />
                  <Route path="/tab" component={Tab} />
                  <Route path="/table" component={Table} />
                  <Redirect to="/index" />
                </Switch>
              </Layout>
            } />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
