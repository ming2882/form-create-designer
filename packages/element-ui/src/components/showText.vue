<template>
	<div v-html="value" v-if="isHtml"></div>
	<el-text v-else-if="!isHtml" :type="type" :tag="tag">{{ value }}</el-text>
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
		_optionType: Number,
		showField: String,
		text: String,
		isHtml: Boolean,
		type: String,
		tag: String
	},
	created() {
		if (this.text) {
			this.value = this.text;
		} else if (this.showField) {
			var formData = this.formCreateInject.api.formData();
			this.value = formData[this.showField] || '';
		}
	},
});
</script>
<style></style>
