import React from "react"
import style from './style/tab.css'

let Tab = (props) => {
    let children = props.tabs.map((item, index) => {
        return <span key={item.key} className={props.selected===index ? style.selected : null}>{item.name}</span>
    })
    return (
        <div className={style.wrapping}>
            {children}
        </div>
    )
}

Tab.defaultProps = {
    tabs: [{
        name: 'Html',
        key: 0
    },{
        name: 'Css',
        key: 1
    },{
        name: 'Javascript',
        key: 2
    }],
    selected: 1
}

export default Tab