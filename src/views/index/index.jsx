/*
 * @Author: caozhongshe 
 * @Date: 2018-08-31 11:29:33 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-08-31 18:32:28
 */

import React, { Component } from 'react';
import Button from 'antd/lib/button';

class Index extends Component {
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
    console.log('render');
    return (
      <div className="Laout">
        <Button type="primary">
          内容
        </Button>
      </div>
    );
  }
}

export default Index;
