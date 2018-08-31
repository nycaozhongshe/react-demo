/*
 * @Author: caozhongshe 
 * @Date: 2018-08-31 11:29:33 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-08-31 18:32:55
 */

import React, { Component } from 'react';

import './main.scss'

class ErrorPage extends Component {
  //初始化props
  constructor(props) {
    super(props)
    console.log('constructor', props);
    this.state = {
      data: 1
    }
  }
  //初始化data
  //组件将要加载
  componentWillMount() {
    console.log('componentWillMount');
  }
  //组件加载完成
  componentDidMount() {
    console.log('componentDidMount');
  }
  //将要接受父组件的props
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  //子组件是否更新
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true
  }
  //组件将要更新
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  //组件更新完成
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  //组件即将销毁
  componentWillUnmount() {
    console.log('componentWillUnmount');
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
