import React from 'react'
import { ITarefa } from '../../types/tarefa'
import Botao from '../Botao'
import style from './form.module.scss'

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}>{
    state = {
        tarefa: '',
        tempo: '00:00:00'
    }

    new_task(e: React.FormEvent){
        e.preventDefault();
        this.props.setTarefas(tarefas_anteriores => [...tarefas_anteriores, {...this.state}])
    }

    render() {
        return(
            <form className={style.new_task} onSubmit={this.new_task.bind(this)}>
                <div className={style.input_container}>
                    <label htmlFor='tarefa'>Add new task</label>
                    <input
                        type='text'
                        name='tarefa'
                        id='tarefa'
                        value={this.state.tarefa}
                        onChange={(e) => this.setState({...this.state, tarefa: e.target.value})}
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
                        value={this.state.tempo}
                        onChange={(e) => this.setState({...this.state, tempo: e.target.value})}
                        min='00:00:01'
                        max='01:30:00'
                        required
                    />
                </div>

                <Botao type="submit">Add</Botao>
            </form>
        )
    }
}

export default Formulario;