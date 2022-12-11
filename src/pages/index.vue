<script setup lang="ts">
import { priceItemList } from '~/mock';
import { usePriceModel } from '~/model/priceModel';
let showType = $ref<'month' | 'day' | 'year'>('month')
const reverse = $ref<boolean>(false)
const data = computed(() => usePriceModel({items: priceItemList, showType, reverse}).SortedByDate.value) 
const changeType = (val: 'month' | 'day' | 'year') => {
  showType = val
}
const modalVisible = $ref(false)
</script>
<template>
  <div bg-yellow-100 p-4 flex items-center justify-center flex-col>
    <TopMenu :changeType="changeType" :openModal="() => {modalVisible = true}"/>
    <div flex items-center justify-center flex-col>
      <Calendar :showType="showType" v-for="item in data" :key="item[0].date" :value="item"/>
    </div>
  </div>
  <Editor :visible="modalVisible" @cancel="() => {modalVisible = false}"></Editor>
</template>