<template>
  <div class="common-layout">
    <el-row class="qel-row">

        <el-input
          class='uqInp-1'
          v-model="userName"
          placeholder="查询文本"
          :prefix-icon="Search"
        />

        <el-button type="primary" @click="QueryUser">查询</el-button>

    </el-row>
    <el-main class="UserMain">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="user_name" label="用戶名" width="180" />
        <el-table-column prop="user_pwd" label="密碼" width="180" />
        <el-table-column prop="reg_ip" label="注冊ip" />
      </el-table>
    </el-main>
  </div>
</template>

<script setup>
import { getAllUserData } from "../api/index.js";
import { ref, onMounted } from "vue";
import { Search } from "@element-plus/icons-vue";
import { useStore } from "vuex";
const store = useStore();
onMounted(() => {
  if (
    store.state.editableTabs.length == 0 ||
    store.state.editableTabsValue == "/Home"
  ) {
    var bol=true
    store.state.activeMenuCap = "用户查询";
    store.state.rPath = "/Home/UserQuery";
    store.state.editableTabs.forEach((item,index)=>{
			if (item.name==store.state.rPath){
				store.state.editableTabsValue = item.name
				bol=false
				return
			}
		})
		if (bol){
			store.commit('addTab')
		}
  } else {
    store.state.editableTabsValue = "/Home/UserQuery";
  }
});
const tableData = ref([]);
const userName = ref("");
function QueryUser() {
  tableData.value = [];
  const gData = {
    name: userName.value,
  };
  console.log("gata=", gData);
  getAllUserData(gData).then((res) => {
    Object.values(res.data).forEach((item, index) => {
      tableData.value.push(item);
    });
    console.log(tableData);
  });
}
QueryUser();
</script>
<style>
.qel-row {
  display: flex !important;
  align-items: center !important;
  margin-left: 20px;
  padding-top: 20px;
  /* display:block; */
}
.el-table th {
  background: #b3c0d1 !important;
  font-size: large;
  color: black;
}
.uqInp-1{
  width: 160px;
  margin-right: 20px;
}
@media screen and (max-width: 500px){
  .uqInp-1{
    width: 40vw;
  }
}
.common-layout{
		height: 100%;
  background-color: white;
  border-radius: 10px;
	}
</style>
