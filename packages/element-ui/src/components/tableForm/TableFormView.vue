<template>
    <div class="_fd-table-form">
        <div :id="this.formCreateInject.id" class="_fd-tf-wrap" v-if="$slots.default">
            <slot></slot>
        </div>
        <div class="_fc-child-empty" v-else></div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Sortable from 'sortablejs';

export default defineComponent({
    name: 'TableFormView',
    data() {
        return {};
    },
    props: {
        formCreateInject: Object,
    },
    mounted() {
        this.$nextTick(() => {
            const el = document.getElementById(this.formCreateInject.id);
            new Sortable(el, {
                animation: 150,
                handle: '._fd-drag-btn',
                onEnd: (event) => {
                    const movedItem = this.formCreateInject.rule.children.splice(event.oldIndex, 1)[0];
                    this.formCreateInject.rule.children.splice(event.newIndex, 0, movedItem);
                }
            });
        })
    }
});
</script>

<style>
._fd-table-form {
    min-height: 130px;
    width: 100%;
    border: 1px solid #ECECEC;
    background: #fff;
}

._fc-child-empty {
    min-height: 130px;
}

._fd-tf-wrap {
    display: flex;
    overflow: auto;
}

._fd-tf-wrap>._fd-drag-tool {
    flex-shrink: 0;
    display: flex;
    margin: 2px;
    height: auto;
    overflow: auto;
}
</style>
