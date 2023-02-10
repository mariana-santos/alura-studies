import React from 'react'
import { ITarefa } from '../../types/tarefa'
import Botao from '../Botao'
import style from './form.module.scss'
import { v4 as uuidv4 } from 'uuid'

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}>{
    state = {
        tarefa: '',
        tempo: '00:00:00'
    }

    new_task(e: React.FormEvent){
        e.preventDefault();
        this.props.setTarefas(tarefas_anteriores => 
            [...tarefas_anteriores, 
                {
                    ...this.state,
                    selecionado: false,
                    finalizado: false,
                    id: uuidv4()
                }
            ])
        this.setState({
            tarefa: '',
            tempo: '00:00:00'
        })
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
                        placeholder='Task name'
                        required
                        autoComplete='off'
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

                <Botao 
                    type="submit"
                    disabled={ this.state.tarefa === '' || this.state.tempo === '00:00:00' ? true : false}
                >
                    Add
                </Botao>
            </form>
        )
    }
}

export default Formulario;