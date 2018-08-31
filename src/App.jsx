/*
 * @Author: caozhongshe 
 * @Date: 2018-08-31 11:28:57 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-08-31 18:17:51
 */

import React, { Component } from 'react';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Login from './views/login/index.jsx'
import Layout from './laout/index.jsx'
import Index from './views/index/index.jsx'
import Tab from './views/tab/index.jsx'
import ErrorPage from './views/404/index.jsx'



class App extends Component {
  constructor() {
    super()
    this.state = {
      date: "2017-09",
      hasChildren: true
    }
  }
  /** 自定义方法 */
  changeData() {
    this.setState({
      date: "2017-09"
    })
  }

  killChildren() {
    this.setState({
      hasChildren: !this.state.hasChildren
    })
  }
  render() {
    let LayoutRouter = (
      <Layout>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/tab" component={Tab} />
          <Route component={ErrorPage} />
        </Switch>
      </Layout>
    );
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={props => LayoutRouter} />
        </Switch>
      </Router>
    );
  }
}

export default App;
