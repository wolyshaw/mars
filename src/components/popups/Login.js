import React, { Component } from 'react'
import { render } from 'react-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { fetchData, getUserData } from 'util/util'

import { setToken } from 'actions/user/token'

import styles from 'static/popups/popup.less'
const FormItem = Form.Item

function hasErrors(fieldsError) {
	return Object.keys(fieldsError).some(field => fieldsError[field])
}

class LoginForm extends Component {
	constructor(props) {
		super(props)
		this.toLogin = this._toLogin.bind(this)
	}

	_toLogin(e, getFieldsValue) {
		e.preventDefault()
		fetchData({
			url: '/manage/user/login',
			body: getFieldsValue(),
			success: r => {
				this.props.dispatch(setToken(r.data.token))
				getUserData()
			}
		})
	}

	render() {
		const {
			getFieldDecorator,
			getFieldsError,
			getFieldError,
			isFieldTouched,
			getFieldsValue
		} = this.props.form
		const userNameError = getFieldError('username')
		const passwordError = getFieldError('password')
		return (
			<Form className={ styles.loginInfo } onSubmit={ e => this.toLogin(e, getFieldsValue) }>
				<FormItem
					validateStatus={userNameError ? 'error' : ''}
					help={userNameError || ''}
				>
					{getFieldDecorator('username', {
						rules: [{ required: true, message: 'Please input your username!' }],
					})(
						<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
					)}
				</FormItem>
				<FormItem
					validateStatus={passwordError ? 'error' : ''}
					help={passwordError || ''}
				>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: 'Please input your Password!' }],
					})(
						<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
					)}
				</FormItem>
				<FormItem>
					<Button
						type="primary"
						htmlType="submit"
						disabled={hasErrors(getFieldsError())}
						className={ styles.loginBtn }
					>
						登录
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
		let { close, dispatch, data } = this.props
		return (
			<div className={ [styles.popup, styles.login].join(' ') }>
				<LoginFormRender dispatch={ dispatch }/>
			</div>
		)
	}
}

export default Login
