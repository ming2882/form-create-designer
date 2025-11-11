import { localeProps } from '../../utils';

const label = '栅格布局';
const name = 'fcRow';

export default {
    menu: 'layout',
    icon: 'icon-row',
    label,
    name,
    mask: false,
    children: 'col',
    childrenLen: 2,
    rule() {
        return {
            type: name,
            native: true,
            props: {},
            children: []
        };
    },
    watch: {
        formCreateNative({ value, rule }) {
            if (value) {
                rule.title = '';
            }
        }
    },
    props(_, { t }) {
        return localeProps(t, name + '.props', [{
            type: 'switch', field: 'formCreateNative', title: '是否显示标题',
            props: {
                activeValue: false,
                inactiveValue: true,
            },
            control: [{ value: false, rule: ['formCreateTitle'] }], value: true
        }, {
            type: 'input', title: '标题',
            field: 'formCreateTitle',
        }, {
            type: 'inputNumber',
            field: 'gutter',
            props: { min: 0 }
        }, {
            type: 'switch',
            field: 'type',
            props: { activeValue: 'flex', inactiveValue: 'default' }
        }, {
            type: 'select',
            field: 'justify',
            options: [{ label: 'start', value: 'start' }, { label: 'end', value: 'end' }, {
                label: 'center',
                value: 'center'
            }, { label: 'space-around', value: 'space-around' }, { label: 'space-between', value: 'space-between' }]
        }, {
            type: 'select',
            field: 'align',
            options: [{ label: 'top', value: 'top' }, { label: 'middle', value: 'middle' }, {
                label: 'bottom',
                value: 'bottom'
            }]
        }]);
    }
};
