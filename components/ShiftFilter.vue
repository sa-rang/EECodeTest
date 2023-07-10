<template>
    <div class="shift-filter my-10 ">
        <div class="text-3xl font-bold underline">
            Filter on price
        </div>
        <div class="slider-demo-block">
            <el-slider v-model="value1" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value1 = ref(0)


</script>
  
<style lang="scss" scoped >
.shift-filter {

    .slider-demo-block {
        display: flex;
        align-items: center;
    }

    .slider-demo-block .el-slider {
        margin-top: 0;
        margin-left: 12px;
    }
}
</style>
  