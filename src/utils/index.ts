import moment from 'moment'
import { PriceItemProp } from '~/types/PriceItem'
export const getTime = (time: number, showType: 'day' | 'month' | 'year' = 'day') => {
  return moment(time).format(showType === 'day' ? 'YY-MM-DD' : showType === 'month' ? 'YY-MM' : 'YY') + `${showType === 'day' ? '' : showType === 'month' ? '月' : '年'}`
}
export const getNumber = (isIncome: boolean, list: PriceItemProp[]) => {
  return list.filter(item => item.isIncome === isIncome).reduce((prev, current) => prev + current.amount, 0)
}