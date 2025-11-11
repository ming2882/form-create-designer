<template>
    <el-text v-if="showField">{{ value }}</el-text>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'showText',
    data() {
        return {
            value: ''
        };
    },
    props: {
        formCreateInject: Object,
        showField: String,
        isHtml: Boolean,
    },
    created() {
        var formData = this.formCreateInject.api.formData();
        this.value = formData[this.showField] || '';
    },
});
</script>
<style></style>
