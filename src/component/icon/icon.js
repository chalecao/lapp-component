import { l } from "lapp"
import { filter, getCtlCls } from '../../common/util'
import './_icon.scss'

const actions = {
    getCls: (props) => {
        return "material-icons"
            + (props.class ? ` ${props.class}` : "")
    }
}
/**
 *
 * @param {*} data
 * @param {*} noBack
 */
export const Icon = ({ props, children }) => {
    props = props || {}
    return <i class={actions.getCls(props)} {...filter(props, ['class'])}>
        {children}
    </i>
}
