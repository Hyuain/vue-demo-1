<template>
<div class="xxx">
  <Button v-model="color">
    <template #default>
      dfasdfdsa
    </template>
    <template #prefix="scope">
      pre-{{scope.index}}
    </template>
  </Button>
</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "./components/Button.vue";
import { fetchData1, fetchData2 } from "./utils/getData";
const color = ref('red')

fetchData1((data) => {
  console.log(data)
})

fetchData2().then((data) => {
  console.log(data)
})

console.log("123")



</script>

<style scoped>
.xxx {
  height: 400px;
  border: 1px solid black;
  width: 100%;
}
</style>
