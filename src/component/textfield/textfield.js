import { l, app } from "lapp"
import { filter, getCtlCls } from '../../common/util'
import './_textfield.scss'

const ctlProps = ['expandable', 'floating-label', 'class', 'label', 'pattern', 'errorTips', 'textarea', 'rows', 'maxrows']

const act = {
    getCls: (props) => {

        return (props.class ? `${props.class}` : "")
    },
    onShow: (props, children) => (dom) => {
        let state = {
            focusCls: "", //is-focused
            validCls: "", //is-invalid
            dirtyCls: ""//is-dirty
        }
        const actions = {
            getCls: (props, state) => {

                return "mdl-textfield mdl-js-textfield is-upgraded"
                    + (state.focusCls || "")
                    + (state.validCls || "")
                    + (state.dirtyCls || "")
                    + getCtlCls(props, ctlProps.slice(0, 2), 'mdl-textfield')
                    + (props.class ? ` ${props.class}` : "")
            },

            getType: (props, state) => {
                if (props['textarea']) {
                    return <textarea onInput={actions.handleInput(state)} onFocus={actions.handleFocus(state)} onBlur={actions.handleBlur(state)} class="mdl-textfield__input" type="text" rows={props.rows || 3} maxrows={props.maxrows || 3}></textarea>
                } else {
                    return <input onClick={actions.handleClick(props)} onInput={actions.handleInput(state)} onFocus={actions.handleFocus(state)} onBlur={actions.handleBlur(state)} class="mdl-textfield__input" type="text" pattern={props.pattern} />
                }
            },
            handleFocus: (state) => (e) => {
                state.focusCls = " is-focused"
                TextfieldSub.$update()
            },
            handleBlur: (state) => (e) => {
                state.focusCls = ""
                TextfieldSub.$update()
            },
            handleClick: (props) => (e) => {
                props.onClick && props.onClick(e)
                TextfieldSub.$update()
            },
            handleInput: (state) => (e) => {
                if (e.target.validity) {
                    if (e.target.validity.valid) {
                        state.validCls = ""
                    } else {
                        state.validCls = " is-invalid"
                    }
                }
                if (e.target.value && e.target.value.length > 0) {
                    state.dirtyCls = " is-dirty"
                } else {
                    state.dirtyCls = ""
                }
                TextfieldSub.$update()
            },
            getExpand: (props, children) => {
                if (props.expandable) {
                    return <div onClick={actions.handleFocus(state)}>{children}</div>
                } else {
                    return ""
                }
            }
        }
        const TextfieldSub = () => {
            return <div class={actions.getCls(props, state)} {...(filter(props, ctlProps))}>
                {actions.getExpand(props, children)}
                <div class={props.expandable ? "mdl-textfield__expandable-holder" : ""}>
                    <label class="mdl-textfield__label" >{props.label}</label>
                    {actions.getType(props, state)}
                    <span class="mdl-textfield__error">{props.errorTips || ""}</span>
                </div>
            </div>
        }
        app(dom, TextfieldSub)
    }
}


export const Textfield = ({ props, children }) => <span onShow={act.onShow(props, children)} class={act.getCls(props)}></span>

