import { l } from "lapp"
import { filter } from '../../common/util'
import './_badge.scss'

const ctlProps = ['class']

const actions = {
    getCls: (props) => {
        return "mdl-badge" + (props.noBack ? " mdl-badge--no-background" : "")
            + (props.icon ? " material-icons" : "")
            + (props.overlap ? " mdl-badge--overlap" : "")
            + (props['class'] ? ` ${props['class']}` : "")
    }
}
/**
 *
 * @param {*} data
 * @param {*} noBack
 */
export const Badge = ({ props={}, children }) => {
    props = props || {}
    return <span class={actions.getCls(props)} data-badge={props.data} {...(filter(props, ctlProps))}>{children}</span>
}
