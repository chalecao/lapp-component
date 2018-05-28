import { l } from "lapp"
import { filter, getCtlCls } from '../../common/util'
import "./_radio.scss"

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
        Radio.$update()
        e.stopPropagation();
    }
}
/**
 *
 * @param {*} props
 * @param {*} children
 */
export const Radio = ({ props, children }) => {
    return <label class={actions.getCls('mdl-radio mdl-js-radio is-upgraded', props)} {...filter(props, ctlProps)}>
            <input type="radio" class="mdl-radio__button"  name={props.name}  checked={!!state.check} onClick={actions.handleClk(props)} />
            <span class="mdl-radio__outer-circle"></span>
            <span class="mdl-radio__inner-circle"></span>
            <span class="mdl-radio__ripple-container mdl-js-ripple-effect mdl-ripple--center" >
                <span class="mdl-ripple is-animating" ></span>
            </span>
            <span class="mdl-radio__label">{props.label}</span>            
        </label>
}


