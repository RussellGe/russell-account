<script setup lang="ts">import { PriceItemProp } from '~/types/PriceItem';
import { getTime, getNumber } from '~/utils';

const props = $defineProps<{
  value: PriceItemProp[]
  showType: 'day' | 'year' | 'month'
}>()
const collapsed = $ref(false)
console.log(props)
</script>
<template>
    <div w-160 flex flex-col items-center mb-2 overflow-hidden>
        <div w-160 z-2 px-4 h-8 justify-between bg-green-100 flex items-center @click="collapsed = !collapsed" font-bold>
            <div flex items-center>
                <div transition ease-in-out duration-300 delay-150 :class="collapsed ? '':'active' " i-carbon-play-filled-alt></div>
                <div ml-2>{{getTime(props.value[0].date, props.showType)}}</div>
            </div>
            <div>账目: {{props.value.length}}条</div>
            <div>收入: {{getNumber(true, props.value)}}</div>
            <div>支出: {{getNumber(false, props.value)}}</div>
            <div>合计: {{getNumber(true, props.value) - getNumber(false, props.value)}}</div>
        </div>
        <div z-1 transition ease-in-out duration-300 delay-150 :class="collapsed ? 'active-panel':''">
            <PriceItem v-for="item in props.value" :key="item.id" :price-item="item"/>
        </div>
    </div>
</template>
<style lang="less" scoped>
.active {
    transform: rotate(90deg);
}
.active-panel {
    transform: translateY(-150%);
    height: 0;
}
</style>