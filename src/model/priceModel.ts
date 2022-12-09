import { PriceItemProp, PriceModelOption } from "~/types/PriceItem";
import { getTime } from "~/utils";

export function usePriceModel(options: PriceModelOption) {
    const dataSource = options.items
    const SortedByDate = computed(() => {
        const res: {[key: string]: PriceItemProp[]} = {
        }
        const list = []
        dataSource.forEach(item => {
            if (getTime(item.date) in res) {
                res[getTime(item.date)].push(item)
            } else {
                res[getTime(item.date)] = [item]
            }
            
        })
        for (const key in res) {
            list.push(res[key])
        }
        return list
    })
    return {
        SortedByDate
    }
}