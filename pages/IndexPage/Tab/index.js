import React from "react"
import style from './style/tab.css'

let Tab = (props) => {
    const {tabs, onClick} = {...props}
    console.log(onClick)
    const clickFunc = function(){
        console.log('2343')
    }
    const children = tabs.map((item, index) => {
        return <span key={item.key} onClick={onClick} className={props.selected===index ? style.selected : null}>{item.name}</span>
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