export function filter(props, ctlProps) {
    let newProp = Object.assign({}, props);
    ctlProps && ctlProps.map(k => {
        delete newProp[k]
    })
    return newProp
}

export function getCtlCls(props, ctlProps, prefix) {
    return props && (ctlProps.map(prop => {
        return (props[prop] ? ` ${prefix}--${prop}` : "")
    }).join(''))
}
