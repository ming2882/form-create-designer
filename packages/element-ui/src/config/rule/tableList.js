import { localeProps } from '../../utils';

const label = '数据表格';
const name = 'fcTableList';

export default {
    menu: 'main',
    icon: 'icon-data-table',
    label,
    name,
    languageKey: [name],
    rule() {
        return {
            type: name,
            native: false,
            title: label
        };
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
            type: 'FetchConfig',
            field: 'formCreateEffect>fetch',
            title: '数据源配置',
            props: {
            }
        }, {
            type: 'TableOptions',
            field: 'columns',
            props: {
                column: [{ label: '标题', key: 'label' }, { label: '字段', key: 'value' }],
                keyValue: 'value'
            }
        }]);
    }
};