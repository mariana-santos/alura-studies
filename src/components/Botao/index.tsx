import React from 'react'
import style from'./button.module.scss'

//O "any" diz que ele pode esperar a string children que é usada no botão. e já o "type?:" espera uma string não obrigatória (por conta do "?")
class Botao extends React.Component<any, any, 
    {
        type?: 'button' | 'submit' | 'reset' | undefined, 
        onClick?: () => void,
        disabled: boolean
    }> {
    
    render(){
        const {type = "button", onClick, disabled } = this.props

        return(
            <button 
                type={type} 
                className={style.btn}
                onClick={onClick}
                disabled={disabled}
            >
                {this.props.children}
            </button>
        )
    }
}

export default Botao