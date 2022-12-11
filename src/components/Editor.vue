<script setup lang="ts">
import { Modal } from 'ant-design-vue';

const props = defineProps<{
  visible: boolean
}>()
const emit = defineEmits(['cancel'])
const handleCancel = () => {
    emit('cancel')
}
const handleOk = () => {
    alert('ok')
}

</script>
<template>
    <Modal v-model:visible="props.visible" @ok="handleOk" @cancel="handleCancel"></Modal>
</template>
<style lang="less">
:deep(.ant) {
    padding: 0
}
</style>