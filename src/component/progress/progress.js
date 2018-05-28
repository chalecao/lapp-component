import { l } from "lapp"
import { filter } from '../../common/util'
import './_progress.scss'

const ctlProps = ['class', 'indeterminate', 'pend']

const actions = {
    getCls: (props) => {
        return "mdl-progress mdl-js-progress is-upgraded"
            + (props['indeterminate'] ? ` mdl-progress--indeterminate` : "")
            + (props['class'] ? ` ${props['class']}` : "")
    }
}
/**
 *
 * @param {*} data
 * @param {*} noBack
 */
export const Progress = ({ props = {}, children }) => {
    props = props || {}
    return <div class={actions.getCls(props)}{...(filter(props, ctlProps))}>
        <div class="progressbar bar bar1" style={"width:" + (props.percent || 10) + "%;"}></div>
        <div class="bufferbar bar bar2" style={"width: " + (100 - (props.pend || 0)) + "%;"}></div>
        <div class="auxbar bar bar3" style={"width: " + (props.pend || 0) + "%;"}></div>
    </div>
}
