import React from 'react'
import style from'./button.module.scss'

class Botao extends React.Component<any, any>{
    render(){
        return(
            <button className={style.btn}>{this.props.children}</button>
        )
    }
}

export default Botao