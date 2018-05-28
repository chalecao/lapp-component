import { l } from "lapp"
import { filter, getCtlCls } from '../../common/util'
import "./_switch.scss"

const ctlProps = ['class', 'label','checked', 'name']
const state = {
    check: null
}

const actions = {
    init:(checked)=>{
        if (state.check == null) state.check = (checked ? "is-checked" : "")
    },
    getCls: (cls, props) => {
        actions.init(props.checked)
        return cls + ` ${state.check}`
            + (props.class ? ` ${props.class}` : "")
    },

    handleClk: (props) => (e) => {
        actions.init(props.checked)
        state.check = !state.check ? "is-checked" : ""
        props.onChange && props.onChange(e, state.check)
        Switch.$update()
        e.stopPropagation();
    }
}
/**
 *
 * @param {*} props
 * @param {*} children
 */
export const Switch = ({ props, children }) => {
    return <label class={actions.getCls('mdl-switch mdl-js-switch mdl-js-ripple-effect is-upgraded', props)} {...filter(props, ctlProps)}>
        <input type="checkbox" class="mdl-switch__input" name={props.name}  checked={!!state.check} onClick={actions.handleClk(props)}/>
        <div class="mdl-switch__track"></div>
        <div class="mdl-switch__thumb">
            <span class="mdl-switch__focus-helper"></span>
        </div>
        <span class="mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center" >
            <span class="mdl-ripple is-animating"></span>
        </span>
        <span class="mdl-switch__label">{props.label}</span>
    </label>
}


