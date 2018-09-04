import React, { Component } from 'react'
import { Table, Divider, Button, message, Popconfirm } from 'antd';
import { getRecruitCityList, delRecruitCity, createOrUpdateRecruitCity } from "@/api/city";
import Edit from "./components/Edit";
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
    console.log(111)
    this.delRecruitCity()
  }

  delRecruitCity() {
    delRecruitCity({})
      .then(res => {
        message.success("操作成功")
        this.getRecruitCityList()
      }).catch(e => {
        console.log(e)
      })
  }
  createOrUpdateRecruitCity(params) {
    createOrUpdateRecruitCity(params).then(
      res => {
        this.hideModal()
        message.success("操作成功")
        this.getRecruitCityList()
      }
    ).catch(
      e => {
        console.log(e);
      }
    )
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
  // edit
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  hideModal = () => {
    const form = this.formRef.props.form;
    form.resetFields();
    this.setState({
      visible: false,
    });
  }
  handleCancel = () => {
    this.hideModal()
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      let params = form.getFieldsValue()
      this.createOrUpdateRecruitCity(params)
      // this.hideModal()
    });
  }

  cancel(e) {
    message.error('Click on No');
  }
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  render() {
    const columns = [{
      title: 'ID',
      hidden: true,
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      required: true,
    },
    {
      title: 'sort',
      dataIndex: 'sort',
      key: 'sort',
    },
    {
      title: 'Action',
      key: 'action',
      hidden: true,
      render: (text, record) => {
        return (
          <span>
            <Button type="primary" onClick={this.showModal}>编辑</Button>
            <Divider type="vertical" />
            <Popconfirm
              title="确认删除这条数据"
              onConfirm={() => this.handleDel()}
              onCancel={() => this.cancel()}
              okText="确定"
              cancelText="取消">
              <Button type="danger" >删除</Button>
            </Popconfirm>
          </span>
        )
      },
    }];

    return (
      <div>
        <Table columns={columns} dataSource={this.state.data} rowKey="id" />
        <Edit
          wrappedComponentRef={this.saveFormRef}
          columns={columns}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}>
        </Edit>
      </div>
    )
  }
}
export default App;