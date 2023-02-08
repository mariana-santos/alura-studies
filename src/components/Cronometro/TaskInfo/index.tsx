import { ITarefa } from "../../../types/tarefa";
import style from './info.module.scss'

interface Props {
    selecionado: ITarefa | undefined
}

export default function Task_Info({ selecionado } : Props){
    return(
        <div className={style.task_info}>
            <h3>Task info</h3>
            { selecionado ? 
            <>
                <div>
                    <label>Description:</label>
                    <span>{selecionado.tarefa}</span>
                </div>

                <div>
                    <label>Time needed:</label>
                    <span>{selecionado.tempo}</span>
                </div>
            </>
            : 
            <p> No task selected yet. Please select one from your "to-do list" and then start the timer</p>
            }
            
        </div>
    );
}