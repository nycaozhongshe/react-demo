/*
 * @Author: caozhongshe 
 * @Date: 2018-08-31 11:29:33 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-08-31 23:24:45
 */

import React, { Component } from 'react';
import Button from 'antd/lib/button';
import { connect } from "react-redux";
import { switchMenu } from "../../redux/action/index";
class Index extends Component {
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
    console.log('componentWillMount');
  }
  //组件加载完成
  componentDidMount() {
    console.log('componentDidMount');
  }
  /** 自定义事件 */
  handleClick() {
    console.log(this.props, 'props')
    const { dispatch } = this.props
    dispatch(switchMenu('dsb'))
    // this.setState({
    //   data: 2
    // })
  }
  render() {
    console.log('render');
    return (
      <div className="Laout">
        <Button type="primary" onClick={() => this.handleClick()}>
          内容
        </Button>
      </div>
    );
  }
}

export default connect()(Index);
