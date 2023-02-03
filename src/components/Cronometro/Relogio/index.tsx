import style from '../cronometro.module.scss'

interface Props {
    tempo: number | undefined
}

export default function Relogio( { tempo = 0 } : Props){

    const minutos = Math.floor( tempo / 60)
    const segundos = tempo % 60

    //padstart -> força a ter 2 caracteres no mínimo
    const [minDezena, minUnidade] = String(minutos).padStart(2, '0')
    const [segDezena, segUnidade] = String(segundos).padStart(2, '0')

    return (
        <div className={style.relogio}>
            <span className={style.number}>{minDezena}</span>
            <span className={style.number}>{minUnidade}</span>
            <span className={style.division}>:</span>
            <span className={style.number}>{segDezena}</span>
            <span className={style.number}>{segUnidade}</span>
        </div>
    )
}