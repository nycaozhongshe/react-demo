/*
 * @Author: caozhongshe 
 * @Date: 2018-08-31 11:29:33 
 * @Last Modified by: caozhongshe
 * @Last Modified time: 2018-09-02 17:50:32
 */

import React, { Component } from 'react';
import Button from 'antd/lib/button';
import { connect } from 'react-redux';

import propTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { min, plus } from '../../redux/actions/counter'

const mapDispathToProps = (dispath) => {
  return bindActionCreators({ min, plus }, dispath)
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
@connect(mapStateToProps, mapDispathToProps)
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
    console.log(this.props)
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


export default Index;


