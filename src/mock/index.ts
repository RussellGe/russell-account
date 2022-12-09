import type { PriceItemProp } from '~/types/PriceItem'

export const priceItemList: PriceItemProp[] = [
  {
    category: {
      name: '旅行',
      icon: 'i-carbon-airport-01',
    },
    id: '1',
    name: '上海机票',
    isIncome: false,
    amount: 530,
    date: 1670567233787
  },
  {
    category: {
      name: '旅行',
      icon: 'i-carbon-airport-01',
    },
    id: '2',
    name: '北京机票',
    isIncome: false,
    amount: 670,
    date: 1670216133787
  },
  {
    category: {
      name: '旅行',
      icon: 'i-carbon-airport-01',
    },
    id: '3',
    name: '红包',
    isIncome: true,
    amount: 200,
    date: 1670567033787
  },
]
