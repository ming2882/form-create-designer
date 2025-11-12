import { localeOptions, localeProps } from "../../utils";

const label = "显示字段";
const name = "showText";

export default {
  menu: "aide",
  icon: "icon-span",
  label,
  name,
  rule({ t }) {
    return {
      type: name,
      props: {
        showField: "",
        isHtml: false,
      },
    };
  },
  watch: {
    formCreateNative({ value, rule }) {
      if (value) {
        rule.title = "";
      }
    },
    _optionType({ value, rule }) {
      if (value == 2) {
        rule.props.text = "";
      } else if (value == 1) {
        rule.props.showField = "";
      }
    },
  },
  props(_, { t }) {
    return localeProps(t, name + ".props", [
      {
        type: "radio",
        title: "文本类型",
        field: "_optionType",
        value: 2,
        options: [
          { label: "绑定字段", value: 2 },
          { label: "文本", value: 1 },
        ],
        props: {
          type: "button",
        },
        control: [
          {
            value: 2,
            rule: [
              {
                type: "input",
                field: "showField",
                title: "显示字段",
              },
            ],
          },
          {
            value: 1,
            rule: [
              {
                type: "input",
                field: "text",
                title: "文本内容",
                props: {
                  type: "textarea",
                  rows: 3,
                },
              },
            ],
          },
        ],
      },
      {
        type: "switch",
        field: "isHtml",
        title: "是否html",
        props: {
          activeValue: true,
          inactiveValue: false,
        },
        value: false,
      },
      {
        type: "select",
        field: "type",
        props: {
          clearable: true,
        },
        options: localeOptions(t, [
          { label: "primary", value: "primary" },
          { label: "success", value: "success" },
          { label: "warning", value: "warning" },
          { label: "danger", value: "danger" },
          { label: "info", value: "info" },
        ]),
      },
      {
        type: "input",
        field: "tag",
        title: "显示标签",
        value: "span",
      },
    ]);
  },
};
