import React from 'react'
import Botao from '../Botao'
import style from './form.module.scss'

class Formulario extends React.Component{
    render() {
        return(
            <form className={style.new_task}>
                <div className={style.input_container}>
                    <label htmlFor='tarefa'>Add new task</label>
                    <input
                        type='text'
                        name='tarefa'
                        id='tarefa'
                        placeholder='What would you like to study?'
                        required
                    />
                </div>

                <div className={style.input_container}>
                    <label htmlFor='tempo'>Time needed</label>
                    <input
                        type='time'
                        name='tempo'
                        id='tempo'
                        step='1'
                        min='00:00:01'
                        max='01:30:00'
                        required
                    />
                </div>

                <Botao>Add</Botao>
            </form>
        )
    }
}

export default Formulario;