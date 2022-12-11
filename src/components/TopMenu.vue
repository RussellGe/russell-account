<script setup lang="ts">
import {Select, SelectProps} from 'ant-design-vue'
const props = defineProps<{
  changeType: (val: 'month' | 'day' | 'year') => void
  openModal: () => void
}>()
const options = $ref<SelectProps['options']>([
      {
        value: 'day',
        label: '按日排序',
      },
      {
        value: 'month',
        label: '按月排序',
      },
      {
        value: 'year',
        label: '按年排序',
      },
      ])
const sortValue = $ref('day')
const handleChange: SelectProps['onChange'] = value => {
  props.changeType(value as 'month' | 'day' | 'year')
};
</script>
<template>
    <div w-160 flex items-center mb-2 overflow-hidden>
        <Select @change="handleChange" v-model:value="sortValue" bg-teal-100 w-30 outline-0 b-0 :options="options"/>
        <div @click="openModal" i-carbon-add-filled></div>
    </div>
</template>
<style lang="less">
::v-deep .ant-select-selector {
    outline: none;
    border: none;
    background: transparent;
}
</style>