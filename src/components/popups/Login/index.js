import React, { PureComponent } from 'react'
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd'
const FormItem = Form.Item
import { dispatch } from 'util/store'
import { setUserInfo } from 'actions/user/userinfo'
import styles from './index.less'
import { closePopup } from '../index'

class Login extends PureComponent {
  constructor(props) {
    super(...props)
  }

  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        closePopup('login')
        localStorage.setItem('token', values['nicename'])
        dispatch(setUserInfo())
      }
    })
  }

  componentDidMount() {
    if(this.props.mount && typeof this.props.mount === 'function') {
      this.props.mount()
    }
  }

  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form
    return (
      <div className={ styles.login }>
        <Row type="flex" justify="center" align="middle">
          <Col span={6}>
            <div className={ styles.content }>
              <Form onSubmit={ this.handleSubmit.bind(this) }>
                <FormItem>
                  {getFieldDecorator('nicename', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" />} placeholder="Username" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your password!' }],
                  })(
                    <Input prefix={<Icon type="lock" />} placeholder="Password" />
                  )}
                </FormItem>
                <FormItem>
                  <Button
                    style={{width: "100%"}}
                    type="primary"
                    htmlType="submit"
                    disabled={this.hasErrors(getFieldsError())}
                  >
                    Log in
                  </Button>
                </FormItem>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Form.create()(Login)
