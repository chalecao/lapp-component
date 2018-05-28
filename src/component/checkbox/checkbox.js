import { l } from "lapp"
import { filter } from '../../common/util'
import './_checkbox.scss'

const ctlProps = ['class', 'label', 'checked', 'name', 'onChange']
const state = {
    check: null
}
const actions = {
    init: (checked) => {
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
        Checkbox.$update()
        e.stopPropagation();
    }
}
/**
 *
 * @param {*} props
 * @param {*} children
 */
export const Checkbox = ({ props, children }) => {
    return <label class={actions.getCls('mdl-checkbox mdl-js-checkbox is-upgraded', props)} {...filter(props, ctlProps)}>
        <input type="checkbox" class="mdl-checkbox__input" name={props.name} checked={!!state.check} onClick={actions.handleClk(props)} />
        <span class="mdl-checkbox__focus-helper"></span>
        <span class="mdl-checkbox__box-outline">
            <span class="mdl-checkbox__tick-outline"></span>
        </span>
        <span class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center" >
            <span class="mdl-ripple is-animating" ></span>
        </span>
        <span>{props.label}</span>
    </label>
}


