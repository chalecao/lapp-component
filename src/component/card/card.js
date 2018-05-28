import { l } from "lapp"
import { filter } from '../../common/util'
import './_card.scss'

const ctlProps = ['title', 'desc', 'class']

const actions = {
    getCls: (props) => {
        return "mdl-card"
            + (props.shadow ? " mdl-shadow--2dp" : "")
            + (props['class'] ? ` ${props['class']}` : "")
    }
}
/**
 *
 * @param {*} props
 * @param {*} children
 */
export const Card = ({ props, children }) => {
    props = props || {}
    return <div class={actions.getCls(props)} {...(filter(props, ctlProps))}>
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">{props.title}</h2>
        </div>
        {props.desc ? (<div class="mdl-card__supporting-text">{props.desc}</div>) : ""}
        {children.length ? (<div class="mdl-card__actions mdl-card--border">
            {children}
        </div>) : ""}
    </div>
}
