<template>
    <el-table :data="formCreateInject.options" style="width: 100%">
        <el-table-column v-for="(item, index) in columns" :key="index" :label="item.label" :prop="item.value">
        </el-table-column>
    </el-table>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'fcTableList',
    emits: ['update:modelValue', 'change', 'remove'],
    data() {
        return {
        };
    },
    props: {
        formCreateInject: Object,
        columns: Array,
        effect: {
            fetch: {
                data: {},
                query: {},
                action: '',
                method: 'POST' | 'GET',
            }
        }
    },
    methods: {
    },
});
</script>