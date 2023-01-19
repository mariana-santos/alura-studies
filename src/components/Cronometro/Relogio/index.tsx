import style from '../cronometro.module.scss'

export default function Relogio(){
    return(
        <>
            <span className={style.number}>0</span>
            <span className={style.number}>0</span>
            <span className={style.division}>:</span>
            <span className={style.number}>0</span>
            <span className={style.number}>0</span>
        </>
    )
}