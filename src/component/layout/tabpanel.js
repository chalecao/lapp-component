import { l } from "lapp"
import { filter } from '../../common/util'
import './_layout.scss'

const ctlProps = ['title', 'tabs', 'class', 'onChange', 'fixed']

const state = {
    tabs: []
}
/**
 *
 * @augments props.onChange
 *
 */

const actions = {
    getCls: (props) => {
        return "mdl-layout mdl-js-layout is-upgraded"
            + (props['fixed'] ? ' mdl-layout--fixed-tabs' : '')
            + (props['class'] ? ` ${props['class']}` : "")
    },
    switchTab: (props, t) => (e) => {
        props.onChange && props.onChange(e, t)
        state.tabs.forEach(tab => tab.cls = "")
        t.cls = "is-active"
        state.hasActive = true
        TabPanel.$update()
    },
    getTab: (props) => {
        props.tabs.forEach((tab, i) => {

            state.tabs[i] = state.tabs[i] || Object.assign({}, tab)
        })
        return state.tabs.map((t, i) => <a href={"#fixed-tab-" + i} class={"mdl-layout__tab " + (t.cls || "")} onClick={actions.switchTab(props, t)}>{t.val}</a>)
    },

    getTabContent: (tabs, children) => {
        tabs.forEach((tab, i) => {

            state.tabs[i] = state.tabs[i] || Object.assign({}, tab)
        })
        return state.tabs.map((t, i) =>
            <section class={"mdl-layout__tab-panel " + (t.cls || "")} id={"fixed-tab-" + i}>
                {children[i]}
            </section>)
    }
}
/**
 *
 * @param {*} props
 * @param {*} children
 */
export const TabPanel = ({ props, children }) => {
    props = props || {}
    return <div class={actions.getCls(props)} {...filter(props, ctlProps)}>
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <span class="mdl-layout-title">{props.title}</span>
            </div>
            <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
                {actions.getTab(props)}
            </div>
        </header>
        <div class="mdl-layout__content">
            {actions.getTabContent(props.tabs, children)}
        </div>
    </div>
}
