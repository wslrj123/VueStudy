<script setup>
import HelloWorld from "./HelloWorld.vue";
//import LeftMenu from "./LeftMenu.vue";
import Tabs from "./Tabs.vue";
import { onMounted } from "vue";
import ExtendMenu from "./ExtendMenu.vue";
import router from "../router.js";
import { useStore } from "vuex";
//import ScrollWrapper from "./ScrollWrapper.vue";
import Header from "./Header.vue";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";

const store = useStore();
onMounted(() => {
  if (document.body.clientWidth < 500) {
    store.state.notMShow = false;
    store.state.extMenuShow = false;
  }
});
const mainClick = () => {
  if (store.state.notMShow) {
    store.state.isCollapse = true;
  } else {
    store.state.isCollapse = false;
    store.state.extMenuShow = false;
  }
};
</script>
<template>
  <div class="common-layout">
    <el-container>
      <Extend-Menu
        v-if="$store.state.extMenuShow"
        @click.left="$store.state.isCollapse = false"
      />
      <el-container>
        <el-header class="el-header1">
          <Header />
        </el-header>
        <el-header class="el-header2">
          <Tabs />
        </el-header>
        <el-main class="el-main1" @click.left="mainClick">
          <div class="innerForm">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
.el-container {
  height: 100vh;
}

.el-header1 {
  height: 60px;
}

.el-header2 {
  height: 40px;
  /* background-color: red; */
}

.el-main1 {
  height: calc(100vh - 120px);
  color: #333;
  background: #f5f5f5;
  padding: 10px;
}
.innerForm {
  height: 100%;
}
.innerForm div.common-layout {
  height: 100%;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
}
</style>
