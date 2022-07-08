<template>
  <div class="tl-flag">
    <div
      class="home-leftshow"
      v-if="!$store.state.notMShow"
      @click="MShowClick"
    >
      <img src="../assets/img/leftShow.png" />
    </div>
    <el-page-header content="" title="后退" @back="goBack" />
  </div>
  <div class="tr-flag">
    <el-button
      :title="dark ? '白昼' : '黑夜'"
      style="border: none; font-size: 20px"
      circle
      plain
      :icon="dark ? 'sunny' : 'Moon'"
      @click="changeDark"
    >
    </el-button>

    <el-divider direction="vertical"></el-divider>
    <el-dropdown>
      <div class="user-avator">
        <img src="../assets/img/user.png" />
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="onLogout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script>
import router from "../router.js";
import { useStore } from "vuex";
import { ref } from "vue";
let dark = ref(false);
const changeDark = () => {
  dark.value = !dark.value;
  document.documentElement.classList.toggle('dark');
};
export default {
  data() {
    flag: true;
    return { dark };
  },
  setup() {
    const store = useStore();
    const goBack = () => {
      window.history.back(-1);
    };
    function onLogout() {
      localStorage.removeItem("token");
      router.push("/login");
    }
    function MShowClick() {
      // document.getElementsByClassName('home-leftshow')[0].style.transform=this.flag?'rotate(180deg)':'rotate(0deg)';
      this.flag = !this.flag;
      if (store.state.extMenuShow) {
        store.state.extMenuShow = false;
      } else {
        store.state.isCollapse = false;
        store.state.extMenuShow = true;
      }
    }
    return { goBack, onLogout, MShowClick, changeDark };
  },
};
</script>

<style scoped>
.tl-flag {
  float: left;
  width: auto;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 25px;
  font-weight: bold;
  color: black;
}
.tr-flag {
  float: right;
  display: flex;
  align-items: center;
  height: 100%;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.user-avator:hover {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  filter: brightness(50%);
}
.home-leftshow,
.home-leftshow img {
  /* visibility:var(--notMShow); */
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 40px;
  filter: brightness(50%);
}

.home-leftshow img:hover {
  transform: rotate(180deg);
  transition: all 0.5s;
}
.home-leftshow img {
  transform: rotate(0deg);
  transition: all 0.5s;
}
</style>
