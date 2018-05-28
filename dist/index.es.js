import { l, app } from 'lapp';
import { Badge, Icon, Button, Card, Chip, Layout, TabPanel, Checkbox, Radio, Switch, Loading, Tooltip, Textfield, DatetimePicker } from 'lappComponent';

var BoxView = function BoxView(_ref) {
    var props = _ref.props,
        children = _ref.children;
    return l(
        "div",
        null,
        l(
            "h3",
            { "class": "f-b-b" },
            "Badge"
        ),
        l(
            Badge,
            { data: "123", "class": "f-m-r" },
            "TEST"
        ),
        l(
            Badge,
            { data: "\u2665", "class": "f-m-r" },
            "Mood"
        ),
        l(
            Badge,
            { data: "\u2665", "class": "f-m-r", icon: true },
            "account_box"
        ),
        l(
            Badge,
            { data: "\u2665", "class": "f-m-r", icon: true, overlap: true },
            "account_box"
        ),
        l(
            "h3",
            { "class": "f-b-b" },
            "Icon ",
            l(
                "a",
                { href: "https://material.io/tools/icons/?style=baseline", target: "_blank" },
                "more"
            )
        ),
        l(
            Icon,
            { title: "3d_rotation", "class": "f-m-r" },
            "3d_rotation"
        ),
        l(
            Icon,
            { title: "alarm", "class": "f-m-r" },
            "alarm"
        ),
        l(
            Icon,
            { title: "android", "class": "f-m-r" },
            "android"
        ),
        l(
            Icon,
            { title: "favorite", "class": "f-m-r" },
            "favorite"
        ),
        l(
            Icon,
            { title: "add_circle", "class": "f-m-r" },
            "add_circle"
        ),
        l(
            Icon,
            { title: "cloud_queue" },
            "cloud_queue"
        ),
        l(
            "h3",
            { "class": "f-b-b" },
            "Button"
        ),
        l(
            Button,
            { "class": "f-m-r" },
            "Button"
        ),
        l(
            Button,
            { "class": "f-m-r", ripple: true },
            "Button"
        ),
        l(
            Button,
            { "class": "f-m-r", disabled: true },
            "Button"
        ),
        l(
            Button,
            { "class": "f-m-r", primary: true },
            "Button"
        ),
        l(
            Button,
            { "class": "f-m-r", accent: true },
            "Button"
        ),
        l(
            Button,
            { "class": "f-m-r", accent: true, raised: true },
            "Button"
        ),
        l(
            Button,
            { "class": "f-m-r", fab: true },
            l(
                Icon,
                null,
                "add"
            )
        ),
        l(
            Button,
            { "class": "f-m-r", fab: true, ripple: true },
            l(
                Icon,
                null,
                "add"
            )
        ),
        l(
            Button,
            { "class": "f-m-r", icon: true, ripple: true },
            l(
                Icon,
                null,
                "mood"
            )
        ),
        l(
            Button,
            { "class": "f-m-r", icon: true, ripple: true, accent: true },
            l(
                Icon,
                null,
                "mood"
            )
        ),
        l(
            "h3",
            { "class": "f-b-b" },
            "Card"
        ),
        l(
            Card,
            { "class": "w-400 demo-card f-d-ib f-m-r", shadow: true, title: "\u6807\u9898", desc: "\u4ECB\u7ECD\uFF0C\u63CF\u8FF0\u7B49\u7B49" },
            l(
                Button,
                { accent: true, ripple: true },
                "Get Started"
            ),
            l(
                "div",
                { "class": "mdl-card__menu" },
                l(
                    Button,
                    { icon: true, accent: true, ripple: true },
                    l(
                        Icon,
                        null,
                        "share"
                    )
                )
            )
        ),
        l(
            Card,
            { "class": "w-400 f-d-ib f-m-r", shadow: true, title: "\u6807\u9898", desc: "\u4ECB\u7ECD\uFF0C\u63CF\u8FF0\u7B49\u7B49" },
            l(
                Button,
                { accent: true, ripple: true },
                "Get Started"
            ),
            l(
                "div",
                { "class": "mdl-card__menu" },
                l(
                    Button,
                    { icon: true, accent: true, ripple: true },
                    l(
                        Icon,
                        null,
                        "share"
                    )
                )
            )
        ),
        l(Card, { "class": "w-400 demo-card f-d-ib f-m-r", shadow: true, title: "\u6807\u9898" }),
        l(
            "h3",
            { "class": "f-b-b" },
            "Chip"
        ),
        l(
            Chip,
            { contact: true, "class": "f-m-r" },
            l(
                "span",
                { "class": "mdl-color--teal mdl-color-text--white" },
                "A"
            ),
            l(
                "span",
                { "class": "f-vm fs-14" },
                " Button Chip"
            )
        ),
        l(
            Chip,
            { contact: true, deletable: true, "class": "f-m-r" },
            l(
                "span",
                null,
                "A"
            ),
            l(
                "span",
                { "class": "f-vm fs-14" },
                " Button Chip"
            ),
            l(
                "span",
                null,
                l(
                    Icon,
                    null,
                    "share"
                )
            )
        ),
        l(
            Chip,
            { contact: true },
            l("img", { "class": "mdl-chip__contact", src: "https://getmdl.io/templates/dashboard/images/user.jpg" }),
            l(
                "span",
                { "class": "f-vm fs-14" },
                " Button Chip"
            )
        ),
        l(
            "h3",
            { "class": "f-b-b" },
            "Input && Loading && Textfield && DatetimePicker"
        ),
        l(Checkbox, { checked: true, label: "\u662F\u5417", "class": "f-d-ib" }),
        l(Radio, { value: "1", checked: true, label: "\u662F\u5417", "class": "f-d-ib" }),
        l(Switch, { checked: true, label: "\u662F\u5417", "class": "f-d-ib" }),
        l(Textfield, { label: "Text..." }),
        l(Textfield, { pattern: "-?[0-9]*(\\.[0-9]+)?", label: "Number...", errorTips: "Input is not a number!" }),
        l(Textfield, { label: "Text...", "floating-label": true }),
        l(Textfield, { pattern: "-?[0-9]*(\\.[0-9]+)?", label: "Number...", errorTips: "Input is not a number!", "floating-label": true }),
        l(Textfield, { textarea: true, label: "Text..." }),
        l(
            Textfield,
            { expandable: true, label: "Text..." },
            l(
                Button,
                { icon: true, accent: true },
                l(
                    Icon,
                    null,
                    "search"
                )
            )
        ),
        l("br", null),
        l(DatetimePicker, null),
        l("br", null),
        l("br", null),
        l(Loading, { percent: "30" }),
        l("br", null),
        l(Loading, { indeterminate: true, percent: "0" }),
        l("br", null),
        l(Loading, { pend: "20" }),
        l(
            "h3",
            { "class": "f-b-b" },
            "Layout"
        ),
        l(
            "div",
            { "class": "demo-layout-transparent" },
            l(
                Layout,
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
                l(
                    Button,
                    { accent: true, ripple: true },
                    "Get Started"
                )
            )
        ),
        l("br", null),
        l(
            "div",
            { "class": "demo-tabpanel" },
            l(
                TabPanel,
                { tabs: [{
                        val: "组件",
                        cls: "is-active"
                    }, {
                        val: "模块"
                    }, {
                        val: "关于"
                    }], title: "tabs", fixed: true },
                l(
                    "div",
                    { "class": "tab-content" },
                    "tab1"
                ),
                l(
                    "div",
                    { "class": "tab-content" },
                    "tab2"
                ),
                l(
                    "div",
                    { "class": "tab-content" },
                    "tab3"
                )
            )
        ),
        l(
            "h3",
            { "class": "f-b-b" },
            "Tooltip"
        ),
        l(
            Icon,
            { title: "cloud_queue", "class": "l-upload f-m-r" },
            "cloud_queue"
        ),
        l(
            Tooltip,
            { "for": ".l-upload" },
            "Upload ",
            l(
                "strong",
                null,
                "file.zip"
            )
        ),
        l(
            Icon,
            { title: "cloud_queue", "class": "f-m-r", id: "l-upload-right" },
            "cloud_queue"
        ),
        l(
            Tooltip,
            { "for": "l-upload-right", right: true },
            "Share your content",
            l("br", null),
            "via social media"
        ),
        l(
            "span",
            { "class": "f-m-r", id: "l-upload-top" },
            "Tips top"
        ),
        l(
            Tooltip,
            { "for": "l-upload-top", top: true },
            "Share your content",
            l("br", null),
            "via social media"
        ),
        l(
            "span",
            { "class": "f-m-r", id: "l-upload-left" },
            "Tips left"
        ),
        l(
            Tooltip,
            { "for": "l-upload-left", left: true },
            "Share your content",
            l("br", null),
            "via social media"
        )
    );
};

console.time("render virtual DOM with FP");
app(document.querySelector("#app"), BoxView);
console.timeEnd("render virtual DOM with FP");
