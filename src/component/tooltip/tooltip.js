import { l } from "lapp"
import { filter, getCtlCls } from '../../common/util'

import './_tooltip.scss'

const ctlProps = ['bottom', 'left', 'top', 'left', 'for', 'class']
const state = {
    target: "",
    ele: "",
    IS_ACTIVE: "is-active"
}

const actions = {
    getCls: (props) => {
        return "mdl-tooltip"
            + getCtlCls(props, ctlProps.slice(0, 4), 'mdl-tooltip')
            + (props.class ? ` ${props.class}` : "")
    },
    onShow: (props) => (dom) => {
        document.addEventListener("DOMContentLoaded", () => {
            let selector = props.for
            if (selector && (selector[0] == '.' || selector[0] == '#')) {
                state.target = document.querySelector(selector)
            } else if (selector) {
                state.target = document.querySelector("#" + selector)
            }
            if (state.target) {
                state.target.addEventListener('mouseenter', actions.handleMouseEnter(props, dom), false);
                state.target.addEventListener('touchend', actions.handleMouseEnter(props, dom), false);
                state.target.addEventListener('mouseleave', actions.handleMouseLeave(props, dom), false);
                window.addEventListener('scroll', actions.handleMouseLeave(props, dom), true);
                window.addEventListener('touchstart', actions.handleMouseLeave(props, dom));
            }
        })

    },
    handleMouseEnter: (elprops, dom) => (event) => {
        var props = event.target.getBoundingClientRect();
        var left = props.left + (props.width / 2);
        var top = props.top + (props.height / 2);
        var marginLeft = -1 * (dom.offsetWidth / 2);
        var marginTop = -1 * (dom.offsetHeight / 2);

        if (elprops['left'] || elprops['right']) {
            left = (props.width / 2);
            if (top + marginTop < 0) {
                dom.style.top = '0';
                dom.style.marginTop = '0';
            } else {
                dom.style.top = top + 'px';
                dom.style.marginTop = marginTop + 'px';
            }
        } else {
            if (left + marginLeft < 0) {
                dom.style.left = '0';
                dom.style.marginLeft = '0';
            } else {
                dom.style.left = left + 'px';
                dom.style.marginLeft = marginLeft + 'px';
            }
        }

        if (elprops['top']) {
            dom.style.top = props.top - dom.offsetHeight - 10 + 'px';
        } else if (elprops['right']) {
            dom.style.left = props.left + props.width + 10 + 'px';
        } else if (elprops['left']) {
            dom.style.left = props.left - dom.offsetWidth - 10 + 'px';
        } else {
            dom.style.top = props.top + props.height + 10 + 'px';
        }

        dom.classList.add(state.IS_ACTIVE);
    },
    handleMouseLeave: (elprops, dom) => (event) => {
        dom.classList.remove(state.IS_ACTIVE);
    }
}
/**
 *
 * @param {*} props
 * @param {*} children
 */
export const Tooltip = ({ props, children }) =>
    <span class={actions.getCls(props)} onShow={actions.onShow(props)} {...(filter(props, ctlProps))}>
        {children}
    </span>
