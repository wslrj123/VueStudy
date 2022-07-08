<template>
  <div class="login-register" id="gradient">
    <div class="contain">
      <div class="big-box" :class="{ active: isLogin }">
        <div class="big-contain" key="bigContainLogin" @keyup.enter="login" v-if="isLogin">
          <div class="btitle">账户登录</div>
          <div class="bform">
            <input type="email" placeholder="用户名" v-model="form.username" />
            <span class="errTips" v-if="nameError">* 用户名不存在 *</span>
            <input type="password" placeholder="密码" v-model="form.userpwd" />
            <span class="errTips" v-if="pwdError">* 密码错误 *</span>
          </div>
          <button class="bbutton" @click="login">登录</button>
        </div>
        <div class="big-contain" key="bigContainRegister" @keyup.enter="register" v-else>
          <div class="btitle">创建账户</div>
          <div class="bform">
            <input type="text" placeholder="用户名" v-model="form.username" />
            <span class="errTips" v-if="nameExisted">* 用户名已经存在！ *</span>
            <input type="password" placeholder="密码" v-model="form.userpwd" />
            <!-- <SliderCheck /> -->
          </div>
          <button class="bbutton" @click="register">注册</button>
        </div>
      </div>
      <div class="small-box" :class="{ active: isLogin }">
        <div class="small-contain" key="smallContainRegister" v-if="isLogin">
          <div class="stitle">後台管理系統</div>
          <!-- <p class="scontent">开始注册</p> -->
          <button class="sbutton" @click="changeType">注册</button>
        </div>
        <div class="small-contain" key="smallContainLogin" v-else>
          <div class="stitle">後台管理系統</div>
          <!-- <p class="scontent">現在登錄</p> -->
          <button class="sbutton" @click="changeType">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./GradualChange.vue";
import { Search, User } from "@element-plus/icons-vue";
import { getAllUserData, insData } from "../api/index.js";
import { ElMessage } from "element-plus";

import SliderCheck from "./SliderCheck.vue";

export default {
  components: {
    SliderCheck,
  },
  setup() {
    const infoInputStyle = {
      "background-color": "#f0f0f0",
      width: "50%",
    };
    return {
      Search,
      User,
    };
  },
  name: "login-register",
  data() {
    return {
      isLogin: true,
      nameError: false,
      pwdError: false,
      nameExisted: false,
      form: {
        username: "",
        useremail: "",
        userpwd: "",
      },
    };
  },
  methods: {
    changeType() {
      this.isLogin = !this.isLogin;
      this.form.username = "";
      this.form.userpwd = "";
      this.nameError = false;
      this.pwdError = false;
      this.nameExisted = false;
    },
    login() {
      this.$router.push("/home");
      console.log(22)
      const self = this;
      if (self.form.username != "" && self.form.userpwd != "") {
        getAllUserData({
          name: self.form.username,
        })
          .then((res) => {
            console.log("res", res);
            if (JSON.stringify(res.data) == "{}" || JSON.stringify(res.data) == "[]") {
              self.nameError = true;
              self.pwdError = false;
              localStorage.removeItem("token");
            } else {
              if (res.data[0].user_pwd == self.form.userpwd) {
                ElMessage({
                  message: "登錄成功",
                  type: "success",
                });
                localStorage.setItem("token", "yes");
                this.$router.push("/home");
              } else {
                self.pwdError = true;
                self.nameError = false;
                localStorage.removeItem("token");
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        ElMessage.error("填写不能为空");
      }
    },
    register() {
      const self = this;
      var gData = {
        name: self.form.username,
      };
      if (!!self.form.username && !!self.form.userpwd) {
        getAllUserData(gData).then((res) => {
          if (JSON.stringify(res.data) != "{}" && JSON.stringify(res.data) != "[]") {
            self.nameExisted = true;
          } else {
            gData = {
              name: self.form.username,
              pwd: self.form.userpwd,
            };
            insData(gData)
              .then((res) => {
                ElMessage({
                  message: "注冊成功",
                  type: "success",
                });
                self.changeType();
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
      } else {
        ElMessage.error("填写不能为空");
      }
    },
  },
};
</script>

<style scoped="scoped">
.login-register {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  /* display:flex; 
   justify-content:center; 
   align-items:center; */
}

.contain {
  width: 60%;
  height: 60%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 0 3px #f0f0f0, 0 0 4px #f0f0f0;
}

.big-box {
  width: 70%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 30%;
  transform: translateX(0%);
  transition: all 1s;
}

.big-contain {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btitle {
  font-size: 1.5em;
  font-weight: bold;
  color: rgb(57, 167, 176);
}

.bform {
  width: 100%;
  height: 40%;
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
}

.bform .errTips {
  display: block;
  width: 50%;
  text-align: left;
  color: red;
  font-size: 0.7em;
  margin-left: 1em;
}

.bform input {
  width: 50%;
  height: 45px;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 10px;
  padding-left: 2em;
  background-color: #f0f0f0;
}

.bbutton {
  width: 20%;
  height: 40px;
  border-radius: 24px;
  border: none;
  outline: none;
  background-color: rgb(57, 167, 176);
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}

.small-box {
  width: 30%;
  height: 100%;
  background: linear-gradient(135deg, rgb(57, 167, 176), rgb(56, 183, 145));
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0%);
  transition: all 1s;
  border-radius: 30px 0 0 30px;
}

.small-contain {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.stitle {
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  line-height: 5em;
}

/* .scontent {
  font-size: 0.8em;
  color: #fff;
  text-align: center;
  padding: 2em 4em;
  line-height: 1.7em;
} */

.sbutton {
  width: 60%;
  height: 40px;
  border-radius: 24px;
  border: 1px solid #fff;
  outline: none;
  background-color: transparent;
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}

.big-box.active {
  left: 0;
  transition: all 0.5s;
}

.small-box.active {
  left: 100%;
  border-radius: 0 30px 30px 0;
  transform: translateX(-100%);
}

@media screen and (max-width: 800px) {
  .small-box {
    width: 100%;
    height: 35%;
    top: 0;
    left: 0;
    border-radius: 0 0 30px 30px;
    transform: translateY(0%);
  }

  .small-box.active {
    top: 65%;
    border-radius: 30px 30px 0 0;
    left: 0;
    transform: translateY(0%);
  }

  .stitle {
    line-height: 3em;
  }

  .big-box {
    top: 35%;
    height: 65%;
    width: 100%;
    left: 0;
    transition: all 1s;
  }

  .big-box.active {
    top: 0;
    left: 0;
    transition: all 1s;
  }

  .bform input {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .contain {
    width: 100%;
    height: 100%;
    border-radius: 0;
    position: relative;
  }

}
</style>
