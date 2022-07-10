<template>
  <el-tabs
    v-model="$store.state.editableTabsValue"
    @tab-remove="removeTab"
    @tab-change="changeTab"
  >
    <el-tab-pane
      v-for="item in $store.state.editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
      :closable="item.closable"
    >
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "vuex";
import router from "../router.js";

const store = useStore();
const removeTab = (targetName: string) => {
  const tabs = store.state.editableTabs;
  let activeName = store.state.editableTabsValue;
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1];
        if (nextTab) {
          activeName = nextTab.name;
        }
      }
    });
  }

  store.state.editableTabs = tabs.filter((tab) => tab.name !== targetName);
  if (store.state.editableTabs.length == 0) {
    store.state.editableTabsValue = "/Home";
  } else {
    store.state.editableTabsValue = activeName;
  }
};
const changeTab = (targetName: string) => {
  console.log(targetName)
  console.log(store.state.editableTabsValue)
  router.push(store.state.editableTabsValue);
};
</script>