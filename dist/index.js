'use strict';

var lapp = require('lapp');
var lappComponent = require('lappComponent');

var BoxView = function BoxView(_ref) {
    var props = _ref.props,
        children = _ref.children;
    return lapp.l(
        "div",
        null,
        lapp.l(
            "h3",
            { "class": "f-b-b" },
            "Badge"
        ),
        lapp.l(
            lappComponent.Badge,
            { data: "123", "class": "f-m-r" },
            "TEST"
        ),
        lapp.l(
            lappComponent.Badge,
            { data: "\u2665", "class": "f-m-r" },
            "Mood"
        ),
        lapp.l(
            lappComponent.Badge,
            { data: "\u2665", "class": "f-m-r", icon: true },
            "account_box"
        ),
        lapp.l(
            lappComponent.Badge,
            { data: "\u2665", "class": "f-m-r", icon: true, overlap: true },
            "account_box"
        ),
        lapp.l(
            "h3",
            { "class": "f-b-b" },
            "Icon ",
            lapp.l(
                "a",
                { href: "https://material.io/tools/icons/?style=baseline", target: "_blank" },
                "more"
            )
        ),
        lapp.l(
            lappComponent.Icon,
            { title: "3d_rotation", "class": "f-m-r" },
            "3d_rotation"
        ),
        lapp.l(
            lappComponent.Icon,
            { title: "alarm", "class": "f-m-r" },
            "alarm"
        ),
        lapp.l(
            lappComponent.Icon,
            { title: "android", "class": "f-m-r" },
            "android"
        ),
        lapp.l(
            lappComponent.Icon,
            { title: "favorite", "class": "f-m-r" },
            "favorite"
        ),
        lapp.l(
            lappComponent.Icon,
            { title: "add_circle", "class": "f-m-r" },
            "add_circle"
        ),
        lapp.l(
            lappComponent.Icon,
            { title: "cloud_queue" },
            "cloud_queue"
        ),
        lapp.l(
            "h3",
            { "class": "f-b-b" },
            "Button"
        ),
        lapp.l(
            lappComponent.Button,
            { "class": "f-m-r" },
            "Button"
        ),
        lapp.l(
            lappComponent.Button,
            { "class": "f-m-r", ripple: true },
            "Button"
        ),
        lapp.l(
            lappComponent.Button,
            { "class": "f-m-r", disabled: true },
            "Button"
        ),
        lapp.l(
            lappComponent.Button,
            { "class": "f-m-r", primary: true },
            "Button"
        ),
        lapp.l(
            lappComponent.Button,
            { "class": "f-m-r", accent: true },
            "Button"
        ),
        lapp.l(
            lappComponent.Button,
            { "class": "f-m-r", accent: true, raised: true },
            "Button"
        ),
        lapp.l(
            lappComponent.Button,
            { "class": "f-m-r", fab: true },
            lapp.l(
                lappComponent.Icon,
                null,
                "add"
            )
        ),
        lapp.l(
            lappComponent.Button,
            { "class": "f-m-r", fab: true, ripple: true },
            lapp.l(
                lappComponent.Icon,
                null,
                "add"
            )
        ),
        lapp.l(
            lappComponent.Button,
            { "class": "f-m-r", icon: true, ripple: true },
            lapp.l(
                lappComponent.Icon,
                null,
                "mood"
            )
        ),
        lapp.l(
            lappComponent.Button,
            { "class": "f-m-r", icon: true, ripple: true, accent: true },
            lapp.l(
                lappComponent.Icon,
                null,
                "mood"
            )
        ),
        lapp.l(
            "h3",
            { "class": "f-b-b" },
            "Card"
        ),
        lapp.l(
            lappComponent.Card,
            { "class": "w-400 demo-card f-d-ib f-m-r", shadow: true, title: "\u6807\u9898", desc: "\u4ECB\u7ECD\uFF0C\u63CF\u8FF0\u7B49\u7B49" },
            lapp.l(
                lappComponent.Button,
                { accent: true, ripple: true },
                "Get Started"
            ),
            lapp.l(
                "div",
                { "class": "mdl-card__menu" },
                lapp.l(
                    lappComponent.Button,
                    { icon: true, accent: true, ripple: true },
                    lapp.l(
                        lappComponent.Icon,
                        null,
                        "share"
                    )
                )
            )
        ),
        lapp.l(
            lappComponent.Card,
            { "class": "w-400 f-d-ib f-m-r", shadow: true, title: "\u6807\u9898", desc: "\u4ECB\u7ECD\uFF0C\u63CF\u8FF0\u7B49\u7B49" },
            lapp.l(
                lappComponent.Button,
                { accent: true, ripple: true },
                "Get Started"
            ),
            lapp.l(
                "div",
                { "class": "mdl-card__menu" },
                lapp.l(
                    lappComponent.Button,
                    { icon: true, accent: true, ripple: true },
                    lapp.l(
                        lappComponent.Icon,
                        null,
                        "share"
                    )
                )
            )
        ),
        lapp.l(lappComponent.Card, { "class": "w-400 demo-card f-d-ib f-m-r", shadow: true, title: "\u6807\u9898" }),
        lapp.l(
            "h3",
            { "class": "f-b-b" },
            "Chip"
        ),
        lapp.l(
            lappComponent.Chip,
            { contact: true, "class": "f-m-r" },
            lapp.l(
                "span",
                { "class": "mdl-color--teal mdl-color-text--white" },
                "A"
            ),
            lapp.l(
                "span",
                { "class": "f-vm fs-14" },
                " Button Chip"
            )
        ),
        lapp.l(
            lappComponent.Chip,
            { contact: true, deletable: true, "class": "f-m-r" },
            lapp.l(
                "span",
                null,
                "A"
            ),
            lapp.l(
                "span",
                { "class": "f-vm fs-14" },
                " Button Chip"
            ),
            lapp.l(
                "span",
                null,
                lapp.l(
                    lappComponent.Icon,
                    null,
                    "share"
                )
            )
        ),
        lapp.l(
            lappComponent.Chip,
            { contact: true },
            lapp.l("img", { "class": "mdl-chip__contact", src: "https://getmdl.io/templates/dashboard/images/user.jpg" }),
            lapp.l(
                "span",
                { "class": "f-vm fs-14" },
                " Button Chip"
            )
        ),
        lapp.l(
            "h3",
            { "class": "f-b-b" },
            "Input && Loading && Textfield && DatetimePicker"
        ),
        lapp.l(lappComponent.Checkbox, { checked: true, label: "\u662F\u5417", "class": "f-d-ib" }),
        lapp.l(lappComponent.Radio, { value: "1", checked: true, label: "\u662F\u5417", "class": "f-d-ib" }),
        lapp.l(lappComponent.Switch, { checked: true, label: "\u662F\u5417", "class": "f-d-ib" }),
        lapp.l(lappComponent.Textfield, { label: "Text..." }),
        lapp.l(lappComponent.Textfield, { pattern: "-?[0-9]*(\\.[0-9]+)?", label: "Number...", errorTips: "Input is not a number!" }),
        lapp.l(lappComponent.Textfield, { label: "Text...", "floating-label": true }),
        lapp.l(lappComponent.Textfield, { pattern: "-?[0-9]*(\\.[0-9]+)?", label: "Number...", errorTips: "Input is not a number!", "floating-label": true }),
        lapp.l(lappComponent.Textfield, { textarea: true, label: "Text..." }),
        lapp.l(
            lappComponent.Textfield,
            { expandable: true, label: "Text..." },
            lapp.l(
                lappComponent.Button,
                { icon: true, accent: true },
                lapp.l(
                    lappComponent.Icon,
                    null,
                    "search"
                )
            )
        ),
        lapp.l("br", null),
        lapp.l(lappComponent.DatetimePicker, null),
        lapp.l(lappComponent.DatetimePicker, { label: "\u5F00\u59CB\u65F6\u95F4\uFF1A", "floating-label": true }),
        lapp.l(lappComponent.DatetimePicker, { label: "\u7ED3\u675F\u65F6\u95F4\uFF1A", "floating-label": true }),
        lapp.l("br", null),
        lapp.l("br", null),
        lapp.l(lappComponent.Loading, { percent: "30" }),
        lapp.l("br", null),
        lapp.l(lappComponent.Loading, { indeterminate: true, percent: "0" }),
        lapp.l("br", null),
        lapp.l(lappComponent.Loading, { pend: "20" }),
        lapp.l(
            "h3",
            { "class": "f-b-b" },
            "Layout"
        ),
        lapp.l(
            "div",
            { "class": "demo-layout-transparent" },
            lapp.l(
                lappComponent.Layout,
                { nav: [{
                        url: "./",
                        val: "组件"
                    }, {
                        url: "./",
                        val: "模块"
                    }, {
                        url: "./",
                        val: "关于"
                    }], title: "LAPP", drawer: true },
                lapp.l(
                    lappComponent.Button,
                    { accent: true, ripple: true },
                    "Get Started"
                )
            )
        ),
        lapp.l("br", null),
        lapp.l(
            "div",
            { "class": "demo-tabpanel" },
            lapp.l(
                lappComponent.TabPanel,
                { tabs: [{
                        val: "组件",
                        cls: "is-active"
                    }, {
                        val: "模块"
                    }, {
                        val: "关于"
                    }], title: "tabs", fixed: true },
                lapp.l(
                    "div",
                    { "class": "tab-content" },
                    "tab1"
                ),
                lapp.l(
                    "div",
                    { "class": "tab-content" },
                    "tab2"
                ),
                lapp.l(
                    "div",
                    { "class": "tab-content" },
                    "tab3"
                )
            )
        ),
        lapp.l(
            "h3",
            { "class": "f-b-b" },
            "Tooltip"
        ),
        lapp.l(
            lappComponent.Icon,
            { title: "cloud_queue", "class": "l-upload f-m-r" },
            "cloud_queue"
        ),
        lapp.l(
            lappComponent.Tooltip,
            { "for": ".l-upload" },
            "Upload ",
            lapp.l(
                "strong",
                null,
                "file.zip"
            )
        ),
        lapp.l(
            lappComponent.Icon,
            { title: "cloud_queue", "class": "f-m-r", id: "l-upload-right" },
            "cloud_queue"
        ),
        lapp.l(
            lappComponent.Tooltip,
            { "for": "l-upload-right", right: true },
            "Share your content",
            lapp.l("br", null),
            "via social media"
        ),
        lapp.l(
            "span",
            { "class": "f-m-r", id: "l-upload-top" },
            "Tips top"
        ),
        lapp.l(
            lappComponent.Tooltip,
            { "for": "l-upload-top", top: true },
            "Share your content",
            lapp.l("br", null),
            "via social media"
        ),
        lapp.l(
            "span",
            { "class": "f-m-r", id: "l-upload-left" },
            "Tips left"
        ),
        lapp.l(
            lappComponent.Tooltip,
            { "for": "l-upload-left", left: true },
            "Share your content",
            lapp.l("br", null),
            "via social media"
        )
    );
};

console.time("render virtual DOM with FP");
lapp.app(document.querySelector("#app"), BoxView);
console.timeEnd("render virtual DOM with FP");
