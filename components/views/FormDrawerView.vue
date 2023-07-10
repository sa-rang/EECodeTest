<template>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" :size="formSize"
        status-icon>
        <el-form-item label="Title" prop="title">
            <el-input v-model="ruleForm.title" />
        </el-form-item>
        <el-form-item label="Description" prop="desc">
            <el-input v-model="ruleForm.desc" type="textarea" />
        </el-form-item>

        <div v-for="(eachItem, index ) in ruleForm.items" key:index>
            <div class="border bg-slate-100 p-3 my-2">
                <div class="flex justify-end">
                    <el-button type="danger" :icon="Delete" circle @click="removeSubFormItem(index)" />
                </div>

                <el-form-item label="Date " required>
                    <el-form-item :prop="'items.' + index + '.date'"
                        :rules="{ required: true, message: 'Please select date', trigger: 'change' }">
                        <el-date-picker v-model="eachItem.date" type="date" label="Pick a date" placeholder="Pick a date"
                            style="width: 100%" />
                    </el-form-item>
                </el-form-item>

                <el-form-item label="Time" required>
                    <el-col :span="12">
                        <el-form-item :prop="'items.' + index + '.time1'"
                            :rules="{ required: true, message: 'Please select start time', trigger: 'change' }">

                            <el-time-select v-model="eachItem.time1" :max-time="eachItem.time2" class="mr-4"
                                placeholder="Start time" start="08:30" step="00:15" end="18:30" style="width: 100%" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item :prop="'items.' + index + '.time2'"
                            :rules="{ required: true, message: 'Please select end time', trigger: 'change' }">

                            <el-time-select v-model="eachItem.time2" :min-time="eachItem.time1" placeholder="End time"
                                start="08:30" step="00:15" end="18:30" style="width: 100%" />
                        </el-form-item>
                    </el-col>
                </el-form-item>

                <el-form-item label="Type" :prop="'items.' + index + '.type'"
                    :rules="{ required: true, message: 'Please select type', trigger: 'change' }">
                    <el-select v-model="eachItem.type" placeholder="Type">
                        <el-option label="Consultation" value="Consultation" />
                        <el-option label="Telephone" value="Telephone" />
                        <el-option label="Ambulance" value="Ambulance" />
                    </el-select>
                </el-form-item>
                <el-form-item label="Price " required>
                    <el-form-item :prop="'items.' + index + '.price'"
                        :rules="{ required: true, message: 'Please add Price', trigger: 'change' }">
                        <el-input-number v-model="eachItem.price" :min="0" :max="100" style="width: 100%" />
                    </el-form-item>
                </el-form-item>
            </div>
        </div>

        <div class="flex justify-end">
            <el-form-item>
                <el-button type="warning" :icon="Plus" @click="addSubFormItem()"></el-button>
            </el-form-item>
        </div>



        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">
                Create
            </el-button>
            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import { useGlobalStore } from '@/stores/global'
import type { FormInstance, FormRules } from 'element-plus'
import {
    Delete,
    Plus
} from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import { v4 as uuidv4 } from 'uuid';
import { ShiftForm } from "../types"

const GlobalStore = useGlobalStore()
const { addShiftsData } = GlobalStore

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = ref<ShiftForm>({
    id: '',
    title: '',
    desc: '',
    items: [
        {
            type: '',
            date: '',
            time1: '',
            time2: '',
            price: 0
        },
    ]
})

const rules = reactive<FormRules<ShiftForm>>({
    title: [
        { required: true, message: 'Please input title', trigger: 'blur' },
        { min: 3, max: 100, message: 'Length should be 3 to 100 character', trigger: 'blur' },
    ],
})


const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log(uuidv4());
            console.log('submit!')
            let payload = JSON.parse(JSON.stringify(ruleForm.value));
            payload.id = uuidv4();
            addShiftsData(payload);
            ElNotification({
                title: 'Success',
                message: 'Record Added',
                type: 'success',
            })
            ruleFormRef.value?.resetFields();

        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const addSubFormItem = () => {
    if (ruleForm.value.items.length < 3) {
        ruleForm.value.items.push(
            {
                type: '',
                date: '',
                time1: '',
                time2: '',
                price: 0
            },
        )
    } else {
        ElNotification({
            title: 'Error',
            message: 'You can add maximum 3 entries',
            type: 'error',
        })
    }

}
const removeSubFormItem = (i: number) => {
    if (ruleForm.value.items.length > 1) {
        ruleForm.value.items.splice(i, 1);
    } else {
        ElNotification({
            title: 'Error',
            message: 'You need atleast 1 entry',
            type: 'error',
        })
    }
}

</script>
  