import React from 'react'
import style from'./button.module.scss'

//O "any" diz que ele pode esperar a string children que é usada no botão. e já o "type?:" espera uma string não obrigatória (por conta do "?")
class Botao extends React.Component<any, any, {type?: string}>{
    render(){
        const {type = "button" } = this.props
        return(
            <button type={type} className={style.btn}>{this.props.children}</button>
        )
    }
}

export default Botao