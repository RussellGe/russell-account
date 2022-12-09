<script setup lang="ts">
import { priceItemList } from '~/mock';
import { usePriceModel } from '~/model/priceModel';
const data = usePriceModel({items: priceItemList}).SortedByDate.value
</script>
<template>
  <div bg-yellow-100 p-4 flex items-center justify-center flex-col>
    <Calendar v-for="item in data" :key="item[0].date" :value="item"/>
  </div>
</template>