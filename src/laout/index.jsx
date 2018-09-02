/*
 * @Author: caozhongshe 
 * @Date: 2018-08-31 11:29:33 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-09-02 16:35:09
 */

import React, { Component } from 'react';

import './main.scss'

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
        <div className="header">
          头部
        </div>

        <div>
          {this.props.children}
        </div>
        <div className="footer">
          底部
        </div>
      </div>
    );
  }
}

export default ErrorPage;
