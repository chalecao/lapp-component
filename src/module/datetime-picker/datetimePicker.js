import { l, app } from "lapp"
import { filter, getCtlCls } from '../../common/util'
import MaterialDateTimePicker from './js/index';
import { Textfield } from "../../component/textfield/textfield"
import moment from 'moment';


// .on('submit', (val) => console.log(`data: ${val}`))
// .on('open', () => console.log('opened'))
// .on('close', () => console.log('closed'));

const ctlProps = ['class', 'format']
const acts = {
    getCls: (props) => {
        return (props.class ? `${props.class}` : "")
    },
    onShow: (props, children) => (dom) => {
        let picker = new MaterialDateTimePicker();

        let actions = {
            handleClick: (props) => (e) => {
                picker.open();

                picker.on('submit', (val) => {
                    e.target.value = moment(val).format(props.format || 'YYYY-MM-DD HH:mm:ss')
                    props.onChange && props.onChange(val)

                })
                DatePicker.$update()
            }
        }
        const DatePicker = () => {
            return <Textfield onClick={actions.handleClick(props)} noBlur {...filter(props,ctlProps)}>{children}</Textfield>
        }
        app(dom, DatePicker)

    }
}


export const DatetimePicker = ({ props, children }) => <span onShow={acts.onShow(props, children)} class={acts.getCls(props)}></span>
