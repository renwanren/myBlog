/**
 *sowingMap: 轮播图
 *  */
import React from 'react'
import style from './style/sowingMap.css'

class SowingMap extends React.Component{
    constructor(){
        super()
        this.state = {
            imgIndex: 0,
        }
    }
    componentDidMount(){
        console.log('componentDidMount')
        this.timer = setTimeout(() => {
            let imgIndex = (this.state.imgIndex + 1) % 2
            console.log(imgIndex)
            this.setState({imgIndex})
        }, 10000);
    }
    componentDidUpdate(){
        console.log('componentDidUdate')
        this.timer = setTimeout(() => {
            let imgIndex = (this.state.imgIndex + 1) % 2
            console.log(imgIndex)
            this.setState({imgIndex})
        }, 10000);        
    }
    componentWillUnmount(){
        this.timer&&clearTimeOut(this.timer)
    }
    render(){
        return (
            <div style={{overflow: "hidden"}}>
                <div className={style.sowingWrapper}>
                {this.state.imgIndex == 0 ? <img className={style.sowingImg} src="https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=4fbff84f6e2762d09f3ea2bf90ed0849/5243fbf2b2119313562db8dc68380cd791238d74.jpg" />:null}        
                {this.state.imgIndex == 1 ? <img className={style.sowingImg} src="https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=c7020a599f45d688bc02b4a494c37dab/4b90f603738da9773ded4541bd51f8198718e39e.jpg" />:null}        
                </div>
            </div>
        )        
    }

}

export default SowingMap