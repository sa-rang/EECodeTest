<template>
    <div class="shift-list-view">
        <div class="flex justify-between">
            <h1 class="text-3xl font-bold underline">
                Shifts
            </h1>
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
import { useGlobalStore } from '@/stores/global'
import { computed } from "vue";
import ShiftCard from "../ShiftCard"


const GlobalStore = useGlobalStore();
const { toggleFormDrawer } = GlobalStore
const shiftsDataList = computed(() => GlobalStore.getShiftsData)

const openFormDrawer = () => {
    toggleFormDrawer();
}

</script>
  
<style lang="scss" scoped >
.shift-list-view {}
</style>
  