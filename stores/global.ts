import { defineStore } from 'pinia';
import { ShiftForm } from "@/components/types"

export const useGlobalStore = defineStore('global', {
    state: () => ({
        formDrawer: false,
        shiftsData: [
            {
                id: "6588d0f2-13b0-4c96-855d-0e1a56123736",
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
        isCreateForm: true,
        editDataHolder: null
    }),
    getters: {
        getShiftsData: (state) => state.shiftsData,
        getEditDataHolder: (state) => state.editDataHolder,
        getIsCreateForm: (state) => state.isCreateForm,
    },

    actions: {
        toggleFormDrawer() {
            this.formDrawer = !this.formDrawer
        },
        addShiftsData(payload: ShiftForm) {
            this.shiftsData.push(payload);
        },
        updateShiftsData(payload: ShiftForm) {
            const index = this.shiftsData.findIndex((obj) => obj.id === payload.id);
            if (index !== -1) {
                this.shiftsData[index] = payload;
            }
        },
        setEditDataHolder(payload) {
            this.editDataHolder = payload;
        },
        setIsCreateForm(payload: boolean) {
            this.isCreateForm = payload;
        },
    },
})