import { ITarefa } from '../../../types/tarefa';
import style from '../list.module.scss'

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item(props: Props){
    const { tarefa, tempo, selecionado, finalizado, id, selecionaTarefa } = props;
    return(
        <li className={`${style.item} ${selecionado ? style.selected_item : ''}`} onClick={() => selecionaTarefa(
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
        </li>
    )
}