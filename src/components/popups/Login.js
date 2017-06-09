import React, { Component } from 'react'
import { render } from 'react-dom'

import { Form, Icon, Input, Button, Checkbox } from 'antd'
const FormItem = Form.Item

function hasErrors(fieldsError) {
	return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginForm extends Component {
	constructor(props) {
		super(props)
	}

	toLogin(e, getFieldsValue) {
		e.preventDefault()
		console.log(getFieldsValue())
	}

	render() {
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, getFieldsValue } = this.props.form
		const userNameError = getFieldError('userName')
		const passwordError = getFieldError('password')
		return (
			<Form className="login-form" onSubmit={ e => this.toLogin(e, getFieldsValue) }>
				<FormItem
					validateStatus={userNameError ? 'error' : ''}
					help={userNameError || ''}
				>
					{getFieldDecorator('userName', {
						rules: [{ required: true, message: 'Please input your username!' }],
					})(
						<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
					)}
				</FormItem>
				<FormItem
					validateStatus={passwordError ? 'error' : ''}
					help={passwordError || ''}
				>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: 'Please input your Password!' }],
					})(
						<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
					)}
				</FormItem>
				<FormItem>
					<Button
						type="primary"
						htmlType="submit"
						disabled={hasErrors(getFieldsError())}
					>
						Log in
					</Button>
				</FormItem>
			</Form>
		)
	}
}

const LoginFormRender = Form.create()(LoginForm)

class Login extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let { close, dispatch } = this.props
		return (
			<div className="login">
				<LoginFormRender/>
				<span onClick={ close }>关闭弹窗</span>
			</div>
		)
	}
}

export default Login
