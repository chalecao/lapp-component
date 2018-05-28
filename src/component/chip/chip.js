import { l } from "lapp"
import { filter, getCtlCls } from '../../common/util'

import './_chip.scss'

const ctlProps = ['contact', 'deletable', 'class']

const actions = {
    getCls: (props) => {
        return "mdl-chip"
            + getCtlCls(props, ctlProps.slice(0, 3), 'mdl-chip')
            + (props.class ? ` ${props.class}` : "")
    }
}
/**
 *
 * @param {*} props
 * @param {*} children
 */
export const Chip = ({ props, children }) => {
    props = props || {}
    return <span class={actions.getCls(props)} {...(filter(props, ctlProps))}>
        {children}
    </span>
}
