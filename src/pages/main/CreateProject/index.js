import React, { Component } from "react";
import { Modal, Form, Input } from "antd";

const FormItem = Form.Item;

class CreateProject extends Component {
  state = {
    confirmLoading: false
  };

  render() {
    const { visible, onCancel, onOk, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        title="新建项目"
        key="create"
        visible={visible}
        onOk={onOk}
        confirmLoading={this.state.confirmLoading}
        onCancel={onCancel}
      >
        <Form>
          <FormItem labelCol={{ span: 0 }} wrapperCol={{ span: 24 }}>
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "请输入项目名称" }]
            })(<Input placeholder="请填写项目名称" />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(CreateProject);