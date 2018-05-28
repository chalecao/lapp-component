import { l, app } from "lapp"
import { filter, getCtlCls } from '../../common/util'
import MaterialDateTimePicker from './js/index';
import { Textfield } from "../../component/textfield/textfield"
import moment from 'moment';

const picker = new MaterialDateTimePicker()
// .on('submit', (val) => console.log(`data: ${val}`))
// .on('open', () => console.log('opened'))
// .on('close', () => console.log('closed'));

const ctlProps = ['class', 'format']

const actions = {
    getCls: (props) => {
        return "mdl-textfield__input"
            + (props.class ? ` ${props.class}` : "")
    },
    handleClick: (props) => (e) => {
        picker.open();
        picker.on('submit', (val) => {
            e.target.value = moment(val).format(props.format || 'YYYY-MM-DD HH:mm:ss')
            props.onChange && props.onChange(val)

        })
    }
}
/**
 *
 * @param {*} props
 * @param {*} children
 */
export const DatetimePicker = ({ props, children }) => {
    return <Textfield onClick={actions.handleClick(props)} {...filter(props,ctlProps)}>{children}</Textfield>
}
