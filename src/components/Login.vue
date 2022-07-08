<template>
	<div class="login_container">
		<div class="login_box" v-if='lr'>
			<el-form :model="loginForm" ref="loginForm" :rules="rules" rlabel-width="0px" class="login_form">
				<el-form-item prop="name">
					<el-input id='username' @keyup.enter=login() placeholder="請輸入用戶名" v-model="loginForm.name">
					</el-input>
				</el-form-item>
				<el-form-item prop="pwd">
					<el-input id='password' @keyup.enter=login() placeholder="請輸入密碼" show-password v-model="loginForm.pwd"></el-input>
				</el-form-item>
				<div class="btngroup">
					<el-form-item class="btns">
						<el-button type="primary" @click="login()">登錄</el-button>
						<el-button type="info" @click="resig()">注冊</el-button>

					</el-form-item>
				</div>
			</el-form>
		</div>

		<div class="reg_box" v-else>
			<el-form :model="loginForm" ref="loginForm" :rules="rules" rlabel-width="0px" class="login_form">
				<el-form-item prop="name" label='用戶名'>
					<el-input id='username' v-model="loginForm.name" prefix-icon="el-icon-user"></el-input>
				</el-form-item>
				<el-form-item prop="pwd" label='密&nbsp;&nbsp;&nbsp;碼'>
					<el-input id='password' show-password v-model="loginForm.pwd" prefix-icon="el-icon-lock"></el-input>
				</el-form-item>
				<div class="btngroup">
					<el-form-item class="btns">
						<el-button type="primary" :plain="true" @click="resig()">注冊</el-button>
					</el-form-item>
				</div>
			</el-form>
		</div>
	</div>
</template>

<script>
	import {
		ElMessage
	} from 'element-plus'
	import {
		Calendar,
		Search
	} from '@element-plus/icons-vue'
	import {
		getAllUserData,
		insData
	} from '../api/index.js'
	import axios from 'axios'

	export default {
		name: "Login",
		data() {
			return {
				lr: true,
				loginForm: {
					name: '',
					pwd: ''
				},
				// rules: {
				// 	name: [{
				// 			required: true,
				// 			message: '请输入用户名',
				// 			trigger: 'blur'
				// 		},
				// 		{
				// 			min: 3,
				// 			max: 5,
				// 			message: '长度在 3 到 5 个字符',
				// 			trigger: 'blur'
				// 		}
				// 	],
				// 	pwd: [{
				// 		required: true,
				// 		message: '请输入密码',
				// 		trigger: 'change'
				// 	}],
				// }
			}
		},
		methods: {
			resetLoginForm(formName) {
				console.log(this);
				this.$refs[formName].resetFields(); /*idea 会显示unresolved variable $refs*/
			},
			resig() {
				if (this.lr) {
					this.lr = false
					this.loginForm.pwd=""
					this.loginForm.name=""
				} else {
					var gData = {
						name: this.loginForm.name
					}
					console.log(gData)
					getAllUserData(gData).then(res => {
						if (JSON.stringify(res.data) != '{}') {
							ElMessage.error('用戶名已存在')
						} else {
							gData = {
								name: this.loginForm.name,
								pwd: this.loginForm.pwd
							}
							insData(gData).then(res => {
								ElMessage({
									message: '注冊成功',
									type: 'success',
								})
								this.lr = true
							})
						}
					})
				}
			},
			// if (this.lr) {
			// 	this.lr = false;
			// } else {
			// 	if (localStorage.getItem(this.loginForm.name)) {
			// 		ElMessage.error('用戶名已存在')
			// 	} else {
			// 		localStorage.setItem(this.loginForm.name, this.loginForm.pwd)
			// 		localStorage.set
			// 		this.lr = true;
			// 		ElMessage({
			// 			message: '注冊成功',
			// 			type: 'success',
			// 		})
			// 	}

			// }

			login() {
				const gData = {
					name: this.loginForm.name
				}
				getAllUserData(gData).then(res => {
					if (JSON.stringify(res.data) == '{}') {
						ElMessage.error('用戶名不存在')
						localStorage.removeItem('token')
					} else {
						if (res.data[0].user_pwd == this.loginForm.pwd) {
							ElMessage({
								message: '登錄成功',
								type: 'success',
							})
							localStorage.setItem('token', 'yes')
							this.$router.push('/home')
						} else {
							ElMessage.error('密码错误')
							localStorage.removeItem('token')
						}
					}
				})
				// axios({
				//          url:'http://localhost:8888/api/UserSelect',
				//          method:'post',
				//          data:{name:"user1"},
				//          headers:{'Content-Type':'application/json'}
				//         }).then(res=>{
				// 			console.log(res.data)
				//         })

				// if (!localStorage.getItem(this.loginForm.name)){
				// 	ElMessage.error('用戶名不存在')
				// 	localStorage.removeItem('token')
				// }else if (this.loginForm.pwd === localStorage.getItem(this.loginForm.name)) {

				// 	ElMessage({
				// 		message: '登錄成功',
				// 		type: 'success',
				// 	})
				// 	this.$router.push('/home')
				// 	localStorage.setItem('token', 'yes')
				// } else {
				// 	localStorage.removeItem('token')
				// 	ElMessage.error('密碼錯誤')
				// }
			}
		}

	}
</script>

<style lang="less" scoped>
	.login_container {
		background-color: aquamarine;
		/*背景颜色*/
		height: 100%;
		/*占整个屏幕*/
	}

	.login_box,
	.reg_box {
		width: 450px;
		/*登录框宽*/
		height: 300px;
		/*登录框高*/
		background-color: #D2E9FF;
		border-radius: 3px;
		/*登录框圆角*/
		position: absolute;
		/*登录框绝对位置*/
		left: 50%;
		/*登录框左侧位置50%*/
		top: 50%;
		/*登录框上方位置50%*/
		transform: translate(-50%, -50%);

		/*登录框往左自身50%，往下自身高度50%*/
		.avatar_box {
			height: 130px;
			/*图标高*/
			width: 130px;
			border: 1px solid #685eb9;
			/*图标边 1像素 实线*/
			border-radius: 50%;
			/*图标圆角*/
			padding: 0px;
			/*图标内边距*/
			box-shadow: 0 0 10px #D2E9FF;
			/*图标阴影*/
			position: absolute;
			left: 50%;
			/*图标左50%*/
			transform: translate(-50%, -50%);
			background-color: #D2E9FF;

			img {
				width: 100%;
				height: 100%;
				border-radius: 50%;
				background-color: aliceblue;
			}
		}
	}

	.login_form {
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: 0 20px;
		box-sizing: border-box;
		/*为元素设定的宽度和高度决定了元素的边框盒。*/
	}

	.btngroup {
		display: flex;
		justify-content: center;
	}

	.btns {
		display: flex;
		/*Flex布局，可以简便、完整、响应式地实现各种页面布局*/
		justify-content: flex-end;
		/*元素在主轴（页面）上由右或者下开始排列*/
		margin-left: auto;
		margin-right: auto;
	}
</style>
