<script setup>
import { reactive, ref } from "vue";
const input = ref(null);
const win = window;
window.alert(2)
var rt = reactive({ a: 1, bol: false });
const alertText = () => {
  rt.a++;
  rt.bol = !rt.bol;

  console.log(rt.a, rt.bol);
  if (input.value.value) {
    alert(input.value.value);
  } else {
    input.value.value = rt.a;
  }
};
</script>

<template>
  <input ref="input" />
  <p v-if="rt.bol">{{ rt.a }}</p>
  <button @mousemove="alertText">响应按钮</button>

  <p
    :ref="
      function (el) {
        win.alert(el.textContent);
        win.console.log(this)
      }
    "
  >
    1
  </p>
</template>
