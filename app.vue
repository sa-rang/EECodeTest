<template>
  <div class="app flex flex-col items-center">
    <div class="max-w-5xl p-4 bg-slate-50">
      <ShiftListView />

      <client-only>
        <el-drawer v-model="formDrawer" title="Create/Edit Form" direction="rtl">
          <FormDrawerView v-if="formDrawer" />
        </el-drawer>
      </client-only>
    </div>
  </div>
</template>

<script lang="ts" setup>

import ShiftListView from "@/components/views/ShiftListView.vue"
import FormDrawerView from "@/components/views/FormDrawerView.vue"
import { useGlobalStore } from '@/stores/global'
import { storeToRefs } from 'pinia'

const GlobalStore = useGlobalStore()

const { formDrawer } = storeToRefs(GlobalStore);
</script>


  
<style lang="scss" scoped >
.app {}
</style>