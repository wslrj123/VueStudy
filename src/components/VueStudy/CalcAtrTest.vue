<script setup>
import { reactive, ref } from "vue";
const input = ref(null);
const win = window;
var rt = reactive({ a: 1, bol: true });
const alertText = () => {
  console.log(input.value.input.value)
  alert(input.value.input.value);
};
</script>

<template>
  <div>
    <el-row gutter="10">
      <el-col :span="5">
        <el-card shadow="hover">
          <el-icon :size="25" style="color: #409eff"><Flag /></el-icon>
          <span class="card-title">双向绑定</span>
          <el-input v-if="rt.bol" v-model="rt.a" ref="input" />
          <el-button @click="rt.bol = !rt.bol">文本框显示/隐藏</el-button>
          <p>双向绑定的文本框值：{{ rt.a }}</p>
          <el-button @click="alertText">通过ref获取文本值</el-button>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="hover">
          <el-icon :size="25" style="color: #409eff"><Flag /></el-icon>
          <span class="card-title">计算属性</span>
          <el-input v-if="rt.bol" v-model="rt.a" ref="input" />
          <el-button @click="rt.bol = !rt.bol">文本框显示/隐藏</el-button>
          <p>双向绑定的文本框值：{{ rt.a }}</p>
          <el-button @click="alertText">通过ref获取文本值</el-button>
        </el-card>
      </el-col>
      
    </el-row>

    <!-- <p
      :ref="
        function (el) {
          win.alert(el.textContent);
          win.console.log(this);
        }
      "
    >
      1
    </p> -->
  </div>
</template>
<style scoped>
.el-card {
  border-radius: 10px;
  line-height: 50px;
}
.card-title {
  font-size: 25px;
  font-weight: bold;
}
.el-button{
  display: block;
}
</style>