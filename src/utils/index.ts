import moment from 'moment'
import { PriceItemProp } from '~/types/PriceItem'
export const getTime = (time: number) => {
  return moment(time).format('YY-MM-DD')
}
export const getNumber = (isIncome: boolean, list: PriceItemProp[]) => {
  return list.filter(item => item.isIncome === isIncome).reduce((prev, current) => prev + current.amount, 0)
}