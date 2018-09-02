/*
 * @Author: caozhongshe 
 * @Date: 2018-08-31 11:29:33 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-09-02 16:37:49
 */

import React, { Component } from 'react';
import Button from 'antd/lib/button';
// import { connect } from 'react-redux';

class Index extends Component {
  //初始化props
  constructor(props) {
    super(props)
    this.state = {
      data: 1
    }
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
        <Button type="primary">
          内容
        </Button>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     counter: state
//   }
// }

// export default connect(mapStateToProps,{})(Index);

export default Index;

