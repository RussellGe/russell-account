import { PriceItemProp, PriceModelOption } from "~/types/PriceItem";
import { getTime } from "~/utils";

export function usePriceModel(options: PriceModelOption) {
    const dataSource = options.items
    const SortedByDate = computed(() => {
        const res: {[key: string]: PriceItemProp[]} = {
        }
        const list = []
        dataSource.forEach(item => {
            if (getTime(item.date, options.showType) in res) {
                res[getTime(item.date, options.showType)].push(item)
            } else {
                res[getTime(item.date, options.showType)] = [item]
            }
            
        })
        for (const key in res) {
            list.push(res[key])
        }
        options.reverse ? list.sort((a, b) => a[0].date - b[0].date) : list.sort((a, b) => b[0].date - a[0].date)
        return list
    })
    return {
        SortedByDate
    }
}