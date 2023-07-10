import { defineStore } from 'pinia';
import { ShiftForm } from "@/components/types"

export const useGlobalStore = defineStore('global', {
    state: () => ({
        formDrawer: false,
        shiftsData: [
            {
                id: "UUID_Here",
                title: "Base entry",
                desc: "lotem ipsum",
                items: [
                    {
                        date: "12/10/2020",
                        time1: "08:45",
                        time2: "12:30",
                        type: "Consultation",
                        price: 75
                    },
                ]
            },
        ],
    }),
    getters: {
        getShiftsData: (state) => state.shiftsData,
    },

    actions: {
        toggleFormDrawer() {
            this.formDrawer = !this.formDrawer
        },
        addShiftsData(payload: ShiftForm) {
            this.shiftsData.push(payload);
        },
    },
})