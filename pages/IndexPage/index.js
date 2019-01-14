import React from 'react'
import BlogList from './BlogList'
import SideBar from './SideBar'
import SowingMap from './SowingMap'
import Tab from './Tab'
import resetStyle from './style/reset.css'

/**
 * 尽量使用无状态组件
 * 
 * 优点
 * 1. 组件自身包含state过多时，不易管理state
 * 2. 若组件只依靠props，则可增强其复用性
 * 3. 只相当于render,组件不会被实例化.所以不需分配多余的内存,性能会得到提升
 * 
 * 特点
 * 1. 无this
 * 2. 无生命周期
 *  */
let IndexPage = (props) => {
    return (
        <div>
            <SowingMap />
            <Tab />
            <div style={{width: "100%", height: "100%", textAlign: "center", backgroundColor: "#f2f4f5"}}>
                <BlogList style={{display: "inline-block"}} />
                <SideBar style={{display: "inline-block"}} />                
            </div>

        </div>
    )
}

export default IndexPage