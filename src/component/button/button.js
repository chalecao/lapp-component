import { l } from "lapp"
import { filter, getCtlCls } from '../../common/util'

import './_button.scss'

const ctlProps = ['fab', 'raised', 'primary', 'accent', 'icon', 'class']

const actions = {
    getCls: (props) => {
        return "mdl-button mdl-js-button"
            + (props.ripple ? " mdl-js-ripple-effect" : "")
            + getCtlCls(props, ctlProps.slice(0, 5), 'mdl-button')
            + (props.class ? ` ${props.class}` : "")
    }
}
/**
 *
 * @param {*} props
 * @param {*} children
 */
export const Button = ({ props, children }) => {
    props = props || {}
    return <button class={actions.getCls(props)} {...(filter(props, ctlProps))}>
        {children}
    </button>
}
