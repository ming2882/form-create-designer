import { localeProps } from '../../utils';
import uniqueId from '@form-create/utils/lib/unique';

const label = '分组';
const name = 'subForm';

export default {
    menu: 'subform',
    icon: 'icon-group',
    label,
    name,
    inside: false,
    drag: true,
    dragBtn: true,
    mask: false,
    input: true,
    subForm: 'object',
    event: ['change'],
    loadRule(rule) {
        rule.children = rule.props.rule || [];
        rule.type = 'FcRow';
        delete rule.props.rule;
    },
    parseRule(rule) {
        rule.props.rule = rule.children;
        rule.type = 'subForm';
        delete rule.children;
    },
    rule({ t }) {
        return {
            type: 'fcRow',
            field: uniqueId(),
            title: t('com.subForm.name'),
            info: '',
            native: false,
            $required: false,
            props: {},
            children: []
        };
    },
    watch: {
        formCreateNative({ value, rule }) {
            if (value) {
                rule.title = "";
            }
        }
    },
    props(_, { t }) {
        return localeProps(t, name + '.props', [{
            type: 'switch', field: 'formCreateNative', title: '是否字段名称',
            props: { activeValue: false, inactiveValue: true }, value: false
        },
        { type: 'switch', field: 'disabled' },
        { type: 'switch', field: 'syncDisabled', value: true }
        ]);
    }
};
