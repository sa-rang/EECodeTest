<template>
    <div class="shift-list-view">
        <ShiftFilter />
        <div class="flex justify-between">
            <div class="text-3xl font-bold underline">
                Shifts
            </div>
            <el-button type="primary" plain @click="openFormDrawer">ADD SHIFT</el-button>
        </div>
        <div class="p-5">
            <templete v-for="shiftData in shiftsDataList" :key="shiftData.id" class="text item">
                <ShiftCard :shiftData="shiftData" />
            </templete>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useGlobalStore } from '@/stores/global'
import ShiftCard from "../ShiftCard";
import ShiftFilter from "../ShiftFilter"


const GlobalStore = useGlobalStore();
const { toggleFormDrawer, setIsCreateForm } = GlobalStore
const shiftsDataList = computed(() => GlobalStore.getShiftsData)

const openFormDrawer = () => {
    setIsCreateForm(true);
    toggleFormDrawer();
}

</script>
  
<style lang="scss" scoped >
.shift-list-view {}
</style>
  