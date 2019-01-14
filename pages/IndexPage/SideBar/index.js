import React from "react"
import styleClass from "./style/style.css"

let SideBar = (props) => {
    let {style} = props
    style = {
        ...style,
        backgroundColor: "white",
    }
    return (
        <div style={style} className={styleClass.wrapping}>
        <form>
            <input className={styleClass.input} type="text" placeholder="用户名"></input>
            <input className={styleClass.input} type="password" placeholder="密码"></input>
            <button className={styleClass.btn}>提交</button>            
        </form>

        </div>
    )
}

export default SideBar