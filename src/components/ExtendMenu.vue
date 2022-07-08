<template>
  <!--  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group> -->
  <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :collapse="$store.state.isCollapse"
    background-color="#545c64" text-color="#fff" @open="handleOpen" @close="handleClose">
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>测试</span>
      </template>
      <el-menu-item index="/Home/HelloWorld" @click="testFunc1">表單頁</el-menu-item>
      <el-menu-item index="/Home/UserQuery" @click="testFunc2">用户查询</el-menu-item>
      <el-menu-item index="/Home/WangEditTest" @click="testFunc3">文本编辑器</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <IconMenu />
        </el-icon>
        <span>Vue3学习</span>
      </template>
      <el-menu-item index="/Home/VueStudy/Reactive" @click="testFunc4">响应式</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3" disabled>
      <el-icon>
        <document />
      </el-icon>
      <template #title>测试3</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>测试4</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "vuex";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const store = useStore();
const testFunc1 = () => {
  if (!store.state.notMShow) {
    store.state.extMenuShow = false;
  }
  var bol = true;
  store.state.activeMenuCap = "表单页";
  store.state.rPath = "/Home/HelloWorld";
  store.state.editableTabs.forEach((item, index) => {
    if (item.name == store.state.rPath) {
      store.state.editableTabsValue = item.name;
      bol = false;
      return;
    }
  });
  if (bol) {
    store.commit("addTab");
  }
};
const testFunc2 = () => {
  if (!store.state.notMShow) {
    store.state.extMenuShow = false;
  }
  var bol = true;
  store.state.activeMenuCap = "用户查询";
  store.state.rPath = "/Home/UserQuery";
  store.state.editableTabs.forEach((item, index) => {
    if (item.name == store.state.rPath) {
      store.state.editableTabsValue = item.name;
      bol = false;
      return;
    }
  });
  if (bol) {
    store.commit("addTab");
  }
};
const testFunc3 = () => {
  if (!store.state.notMShow) {
    store.state.extMenuShow = false;
  }
  var bol = true;
  store.state.activeMenuCap = "文本编辑器";
  store.state.rPath = "/Home/WangEditTest";
  store.state.editableTabs.forEach((item, index) => {
    if (item.name == store.state.rPath) {
      store.state.editableTabsValue = item.name;
      bol = false;
      return;
    }
  });
  if (bol) {
    store.commit("addTab");
  }
};
const testFunc4 = () => {
  if (!store.state.notMShow) {
    store.state.extMenuShow = false;
  }
  var bol = true;
  store.state.activeMenuCap = "响应式";
  store.state.rPath = "/Home/VueStudy/Reactive";
  store.state.editableTabs.forEach((item, index) => {
    if (item.name == store.state.rPath) {
      store.state.editableTabsValue = item.name;
      bol = false;
      return;
    }
  });
  if (bol) {
    store.commit("addTab");
  }
};
// const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-width: 150px;
  min-height: 400px;
}

.el-menu {
  border-right: 0;
}
</style>
