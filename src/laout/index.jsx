/*
 * @Author: caozhongshe 
 * @Date: 2018-08-31 11:29:33 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-09-03 15:46:42
 */

import React, { Component } from 'react';

import './main.scss'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

class ErrorPage extends Component {
  //初始化props
  constructor(props) {
    super(props)
    this.state = {
      data: 1
    }
  }
  //初始化data
  //组件将要加载
  componentWillMount() {
  }
  //组件加载完成
  componentDidMount() {
  }
  /** 自定义事件 */
  handleClick() {
    this.setState({
      data: 2
    })
  }
  render() {
    return (
      <div className="Laout">
        <Header></Header>
        <div className="content">
          <Sidebar></Sidebar>
          <div className="view">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
