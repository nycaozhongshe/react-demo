import React, { Component } from 'react'

import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    }
  }
  componentWillMount() { }
  componentDidMount() { }
  componentWillReceiveProps() { }
  componentWillUnmount() { }


  render() {
    const { visible, onCancel, onCreate, form, columns } = this.props;
    const { getFieldDecorator } = form;

    let cols = columns.filter(item => {
      return item.hidden ? false : true
    })

    let Content = cols.map((item) => {

      const { dataIndex, required, title, rules } = item

      let rule = [{ required, message: '请输入内容' }]
      if (rules && rules.length) {
        rule = rule.concat(rules)
      }
      return <FormItem label={title} key={dataIndex}>
        {getFieldDecorator(dataIndex, {
          rules: rule,
        })(
          <Input />
        )}
      </FormItem>
    })
    return (
      <Modal
        visible={visible}
        title="Create a new collection"
        okText="确定"
        cancelText="取消"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          {
            Content
          }
        </Form>
      </Modal>
    );
  }
}

const Edit = Form.create()(App)
export default Edit;