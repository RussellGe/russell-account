export interface PriceItemProp {
  category: Category
  id: string
  name: string
  isIncome: boolean
  amount: number
  date: number
}
export interface PriceModelOption {
  items: PriceItemProp[]
}
interface Category {
  name: string
  icon: string
}
