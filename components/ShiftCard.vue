<template>
    <el-card class="box-card w-[600px] my-2">
        <template #header>
            <div class="card-header flex justify-between items-center">
                <span class="text-xl font-bold">{{ shiftDataObj.title }}</span>
                <el-button type="primary" :icon="Edit" circle />
            </div>
            <span>{{ shiftDataObj.desc }}</span>
        </template>
        <div class="p-2 my-2 bg-slate-600 text-white flex justify-between" v-for="eachItem, index in shiftDataObj.items"
            :key="index">
            <span>{{ formatDate(eachItem.date) }}</span>
            <span>{{ eachItem.time1 }}</span>
            <span>{{ eachItem.time2 }}</span>
            <span>{{ eachItem.type }}</span>
            <span>{{ eachItem.price }}</span>
        </div>
    </el-card>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import {
    Edit,
} from '@element-plus/icons-vue'

import { ShiftForm } from "./types"

interface Props {
    shiftData: ShiftForm
}



const props = defineProps<Props>()
const shiftDataObj = computed(() => props.shiftData)



const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(date);
}

</script>
  
<style lang="scss" scoped >
.box-card {}
</style>
  