/*
 * @Author: caozhongshe 
 * @Date: 2018-08-31 11:29:33 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-09-02 17:27:28
 */

import React, { Component } from 'react';
import Button from 'antd/lib/button';
import { connect } from 'react-redux';

import propTypes from 'prop-types';

import { min, plus } from '../../redux/actions/counter'
// import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
@connect(mapStateToProps, { min, plus })
class Index extends Component {
  static propTypes = {
    counter: propTypes.number.isRequired
  }
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
        <span>{this.props.counter}</span>
        <br />
        <br />
        <Button type="primary" onClick={() => { this.props.plus() }}>
          增加
        </Button>
        <br />
        <br />

        <Button type="primary" onClick={() => { this.props.min() }}>
          减少
        </Button>
      </div>
    );
  }
}

// bindActionCreators
// const mapDispathToProps = (dispath) => {
//   return bindActionCreators({},dispath)
// }

export default Index;


