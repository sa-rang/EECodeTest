export interface ShiftForm {
    id: string,
    title: string
    desc: string
    items: subform[]
}

export interface subform {
    type: string
    date: string
    time1: string
    time2: string
    price: number
}
