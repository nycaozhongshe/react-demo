import React, { Component } from 'react'
import { Table, Divider } from 'antd';

import { getRecruitCityList, createOrUpdateRecruitCity, delRecruitCity } from "@/api/city";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentWillMount() {
    this.getRecruitCityList()
  }
  componentDidMount() { }
  componentWillReceiveProps() { }
  componentWillUnmount() { }

  handleClick() {
    console.log(this)
  }
  getRecruitCityList() {
    getRecruitCityList({}).then(
      res => {
        this.setState({
          data: res
        })
      }
    ).catch(
      e => {
        console.log(e);
      }
    )
  }
  render() {
    const columns = [{
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'sort',
      dataIndex: 'sort',
      key: 'sort',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => {
        return (
          <span>
            <a onClick={() => { this.handleClick() }}>Invite {record.name}</a>
            <Divider type="vertical" />
            <a >Delete</a>
          </span>
        )
      },
    }];

    return (
      <div>
        <Table columns={columns} dataSource={this.state.data}  rowKey="id" />
      </div>
    )
  }
}
export default App;