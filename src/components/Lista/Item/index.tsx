import style from '../list.module.scss'

export default function Item(props: {tarefa: String, tempo: String}){
    const { tarefa, tempo } = props;
    return(
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}