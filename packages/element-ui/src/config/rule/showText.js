import { localeProps } from '../../utils';

const label = '显示字段';
const name = 'showText';

export default {
    menu: 'aide',
    icon: 'icon-span',
    label,
    name,
    rule({ t }) {
        return {
            type: name,
            native: false,
            title: '',
            props: {
                showField: '',
                isHtml: false
            },
            style: {
                whiteSpace: 'pre-line',
                width: '100%',
            }
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
            control: [{ value: false, rule: ['formCreateTitle'] }], value: false
        }, {
            type: 'input', title: '标题',
            field: 'formCreateTitle',
        }, {
            type: 'input',
            field: 'showField', title: '显示字段',
        }, {
            type: 'switch', field: 'isHtml', title: '是否html',
            props: {
                activeValue: true,
                inactiveValue: false,
            }, value: false
        }]);
    }
};
