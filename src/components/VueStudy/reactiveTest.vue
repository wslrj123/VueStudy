<script setup>
import { computed, reactive, ref } from "vue";
const input = ref(null);
const win = window;
var rt = reactive({ a: null, bol: true });
var rawHTML = ref('<span style="color:red">这是一段红色字体</span>');
var rawText = ref("");
var activeEvent = ref("mousemove");
var multAtr=ref('{"color":"blue","disabled":null}')
const alertText = () => {
  console.log(input.value.input.value);
  alert(input.value.input.value);
};

</script>

<template>
  <div>
    <el-row gutter="10">
      <!-- 模板语法 -->
      <el-col :span="6">
        <el-card shadow="hover">
          <el-icon :size="25" style="color: #409eff">
            <Flag />
          </el-icon>
          <span class="card-title">插值与原始HTML</span>
          <el-input v-model="rawText" placeholder="输入插值文本" />
          <p>插值:{{ rawText }}</p>
          <el-input v-model="rawHTML" placeholder="原始HTML" />
          <p>原始HTML:<span v-html="rawHTML"></span></p>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card shadow="hover">
          <el-icon :size="25" style="color: #409eff">
            <Flag />
          </el-icon>
          <span class="card-title">指令</span>
          
          <h3>动态参数</h3>
          <el-row>
            <span>当前事件：</span>
            <input v-model="activeEvent" placeholder="动态事件参数" />
            <el-button style="display: inline" @[activeEvent]="win.alert(1)">测试弹出</el-button>
          </el-row>
          
          <h3>多个动态参数</h3>
          <el-row>
            <span>按钮样式：</span>
            <el-input v-model="multAtr" />
            <el-button :="JSON.parse(multAtr)">测试按钮</el-button>
          </el-row>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card shadow="hover">
          <el-icon :size="25" style="color: #409eff">
            <Flag />
          </el-icon>
          <span class="card-title">响应式</span>
          <el-input v-if="rt.bol" v-model="rt.a" ref="input" />
          <el-button @click="rt.bol = !rt.bol">文本框显示/隐藏</el-button>
          <p>双向绑定的文本框值：{{ rt.a }}</p>
          <el-button @click="alertText">通过ref获取文本值</el-button>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <el-icon :size="25" style="color: #409eff">
            <Flag />
          </el-icon>
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

.el-button {
  display: block;
}
</style>