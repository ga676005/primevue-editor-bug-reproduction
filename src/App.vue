<script setup>
import { ref } from 'vue';
const value = ref('')
const show = ref(false)
</script>

<template>
<button @click="show = !show">toggle</button>
  <Editor v-if="show" v-model="value" editorStyle="height: 320px"></Editor>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
