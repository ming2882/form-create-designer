<template>
    <el-descriptions :column="column" :direction="direction" v-if="formCreateInject.options">
        <el-descriptions-item v-for="(item, index) in columns" :key="index" :label="item.label">
            {{ formCreateInject.options[item.value] }}
        </el-descriptions-item>
    </el-descriptions>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'fcDescriptionList',
    emits: ['update:modelValue', 'change', 'remove'],
    data() {
        return {
        };
    },
    props: {
        formCreateInject: Object,
        columns: Array,
        column: Number,
        effect: {
            fetch: {
                data: {},
                query: {},
                action: '',
                method: 'POST' | 'GET',
            }
        },
        direction: {
            type: String,
            default: 'horizontal'
        }
    },
    methods: {
    },
});
</script>