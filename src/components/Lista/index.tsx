import { useEffect, useState } from 'react';
import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './list.module.scss'

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefa: ITarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props){

    const [option, setOption] = useState<string>();
    const [filteredTarefas, setFilteredTarefas] = useState<ITarefa[]>(tarefas);

    useEffect(() => {

        setFilteredTarefas(tarefas)
    }, [tarefas])

    useEffect(() => {
        const filtradas = tarefas.filter((item) => {
            if(option === 'done') return (item.finalizado)
            else if(option === 'todo') return(!item.finalizado)
            else return (item)
        })

        setFilteredTarefas(filtradas)
    }, [option])

    return(
        <aside className={style.tasks}>
            <h2>to-do list</h2>
            <span>These are your tasks for today. Select one and start studying!</span>

            <span>Filter by: </span>

            <div id="filter"
                 onChange={(e) => {
                    const { target } = e
                    setOption((target as HTMLButtonElement).id);
                 }}>

                 <div className={style.wrap_radio}>
                     <input type="radio" name='filter' id='all' defaultChecked/>
                     <label htmlFor='all'>all</label>
                 </div>

                <div className={style.wrap_radio}>
                    <input type="radio" name='filter' id='todo'/>
                    <label htmlFor='todo'>to do</label>
                </div>

                <div className={style.wrap_radio}>
                    <input type="radio" name='filter' id='done'/>
                    <label htmlFor='done'>done</label>
                </div>
            </div>

            <ul>
                {filteredTarefas.length > 0 ? 
                    filteredTarefas.map((item) => (

                        // o {...item} envia como props o próprio objeto que está sendo mapeado (item) sem ter que declarar
                        // cada coisa do objeto, como o tempo e a tarefa
                        
                        <Item 
                            selecionaTarefa={selecionaTarefa}
                            key={item.id}
                            {...item} 
                        />

                    ))
                :
                <p>No tasks found here! :( <br/> <br/> You can create new ones with the form aside</p>
                }
                {}
            </ul>
        </aside>
    );
}

export default Lista;