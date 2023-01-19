import Item from './Item';
import style from './list.module.scss'

function Lista(){
    const Tarefas = [{
        tarefa: 'React',
        desc: 'learn about react hooks',
        tempo: '02:00:00'
    }, 
    {
        tarefa: 'JS',
        desc: 'practice array manipulation',
        tempo: '01:00:00'
    },
    {
        tarefa: 'JS',
        desc: 'practice array manipulation',
        tempo: '01:00:00'
    }
]
    return(
        <aside className={style.tasks}>
            <h2>to-do list</h2>
            <span>These are your tasks for today. Select one and start studying!</span>

            <ul>
                {Tarefas.map((item, index) => (

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