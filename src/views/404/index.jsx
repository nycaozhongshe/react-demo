
import React, { Component } from 'react';


class App extends Component {
  //初始化props   初始化state
  constructor(props) {
    super(props)
    console.log('constructor', props);
    this.state = {
      data: 1
    }
  }
  //组件将要加载
  componentWillMount() {
  }
  //组件加载完成
  componentDidMount() {
  }
  //将要接受父组件的props
  componentWillReceiveProps() {
  }


  //组件即将销毁
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  /** 自定义事件 */

  render() {
    return (
      <div >
      </div>
    );
  }
}

export default App;
