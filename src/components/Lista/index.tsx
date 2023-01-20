import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './list.module.scss'

function Lista({tarefas}: { tarefas: ITarefa[]}){
    return(
        <aside className={style.tasks}>
            <h2>to-do list</h2>
            <span>These are your tasks for today. Select one and start studying!</span>

            <ul>
                {tarefas.map((item, index) => (

                    // o {...item} envia como props o próprio objeto que está sendo mapeado (item) sem ter que declarar
                    // cada coisa do objeto, como o tempo e a tarefa
                    <Item 
                        key={index}
                        {...item} 
                    />

                ))}
            </ul>
        </aside>
    );
}

export default Lista;