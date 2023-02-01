import { ITarefa } from '../../../types/tarefa';
import style from '../list.module.scss'

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item(props: Props){
    const { tarefa, tempo, selecionado, finalizado, id, selecionaTarefa } = props;
    return(
        <li className={`${style.item} ${selecionado && style.selected_item } ${finalizado && style.done_item}`} 
        onClick={() => !finalizado && selecionaTarefa(
            {
                tarefa,
                tempo,
                selecionado,
                finalizado,
                id
            }
        )}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            { finalizado && <span className={style.done} aria-label="done task"> </span> }
        </li>
    )
}