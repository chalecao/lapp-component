import { l } from "lapp"
import { filter } from '../../common/util'
import './_layout.scss'

const ctlProps = ['title', 'nav', 'drawer', 'fixed-drawer', 'class']

const state = {
    drawerCls: ""
}

const actions = {
    getCls: (props) => {
        return "mdl-layout mdl-js-layout"
            + (props['fixed-drawer'] ? ' mdl-layout--fixed-drawer' : '')
            + (props['class'] ? ` ${props['class']}` : "")
    },
    showDrawer: () => {
        state.drawerCls = !state.drawerCls ? " is-visible" : "";
        Layout.$update()
    },
    getNav: (nav) => nav.map(k => <a class="mdl-navigation__link" href={k.url}>{k.val}</a>),

    getDrawerContent: (props) => props.drawer ? (
        <div>
            <div class="mdl-layout__drawer-button" onClick={actions.showDrawer}><i class="material-icons">menu</i></div>
            <div class={"mdl-layout__obfuscator" + state.drawerCls} onClick={actions.showDrawer}></div>
            <div class={"mdl-layout__drawer" + state.drawerCls}>
                <span class="mdl-layout-title">{props.title}</span>
                <nav class="mdl-navigation">
                    {actions.getNav(props.nav)}
                </nav>
            </div>
        </div>) : ""

}
/**
 *
 * @param {*} props
 * @param {*} children
 */
export const Layout = ({ props, children }) => {
    props = props || {}
    return <div class={actions.getCls(props)} {...filter(props, ctlProps)}>
        <header class={"mdl-layout__header mdl-layout__header--transparent"
            + (props.drawer ? '' : ' mdl-layout--no-drawer-button')}>
            <div class="mdl-layout__header-row">
                <span class="mdl-layout-title">{props.title}</span>
                <div class="mdl-layout-spacer"></div>
                <nav class="mdl-navigation">
                    {actions.getNav(props.nav)}
                </nav>
            </div>
        </header>

        {actions.getDrawerContent(props)}

        <div class="mdl-layout__content">
            {children}
        </div>
    </div>
}
