<template>
  <div
  class="button-wrapper"
  :style="{ color: props.modelValue }"
  @click="handleClickButton"
  >
    <slot name="prefix" :index="1"></slot>
    <slot name="prefix" :index="2"></slot>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const handleClickButton = () => {
  emit('update:modelValue', props.modelValue === 'blue' ? 'red' : 'blue')
}
</script>

<style scoped>
.button-wrapper {
  height: 200px;
  width: 50%;
  border: 1px solid red;
  margin: 12px;
}
</style>