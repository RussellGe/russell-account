<script setup lang="ts">
import type { PriceItemProp } from '~/types/PriceItem'
import {getTime} from '~/utils'
defineOptions({
  name: 'PriceItem',
})

const props = $defineProps<{
  priceItem: PriceItemProp
}>()


console.log(props)
</script>

<template>
  <div flex w-150 h-10 px-3 rounded-lg shadow-md :class="props.priceItem.isIncome ? 'bg-teal-100' : 'bg-red-100'" items-center my-4 justify-between>
    <div w-20 flex items-center>
      <div mr-2 :class="props.priceItem.category.icon" />
      <div> {{ props.priceItem.category.name }} </div>
    </div>
    <div w-40> {{props.priceItem.name}} </div>
    <div w-40> {{props.priceItem.isIncome ? props.priceItem.amount : `-${props.priceItem.amount}`}} </div>
    <div w-40> {{getTime(props.priceItem.date)}} </div>
    <div w-20 flex>
      <span w-7 h-7 mr-1 cursor-pointer hover="shadow-xl" flex items-center justify-center rounded>
        <div i-carbon-row-delete ></div>
      </span>
      <span w-7 h-7 cursor-pointer hover="shadow-xl" flex items-center justify-center rounded>
        <div i-carbon-edit cursor-pointer></div>
      </span>
    </div>
  </div>
</template>
