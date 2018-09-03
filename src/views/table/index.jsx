import React, { Component } from 'react'
import { Table, Divider, Button, Modal } from 'antd';
import { getRecruitCityList, createOrUpdateRecruitCity, delRecruitCity } from "@/api/city";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      visible: false
    }
  }
  componentWillMount() {
    this.getRecruitCityList()
  }
  componentDidMount() { }
  componentWillReceiveProps() { }
  componentWillUnmount() { }

  handleEdit() {
    console.log(this)
  }
  handleDel() {
    this.delRecruitCity()
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  hideModal = () => {
    this.setState({
      visible: false,
    });
  }
  delRecruitCity() {
    delRecruitCity({})
      .then(res => {
        console.log(res)
      }).catch(e => {
        console.log(e)
      })
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
            <Button type="primary" onClick={this.showModal}>编辑</Button>
            <Divider type="vertical" />
            <Button type="danger" onClick={() => { this.handleDel() }}>删除</Button>
          </span>
        )
      },
    }];

    return (
      <div>
        <Table columns={columns} dataSource={this.state.data} rowKey="id" />
        <Modal
          title="Modal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </div>
    )
  }
}
export default App;