import { l } from "lapp"
import { filter, getCtlCls } from '../../common/util'
import MaterialDateTimePicker from './js/index';
import { Textfield } from "../../component/textfield/textfield"

const picker = new MaterialDateTimePicker()
// .on('submit', (val) => console.log(`data: ${val}`))
// .on('open', () => console.log('opened'))
// .on('close', () => console.log('closed'));

const ctlProps = ['fab', 'raised', 'primary', 'accent', 'icon', 'class']

const actions = {
    getCls: (props) => {
        return "mdl-textfield__input"
            + (props.class ? ` ${props.class}` : "")
    },
    handleClick:(props)=> (e) => {
        picker.open()
        picker.on('submit', (val) => {
            e.target.value = val
            props.onChange && props.onChange(val)
            console.log(`data: ${val}`)
        })
    }
}
/**
 *
 * @param {*} props
 * @param {*} children
 */
export const DatetimePicker = ({ props, children }) => {
    return <Textfield onClick={actions.handleClick(props)} {...props}>{children}</Textfield>
}
