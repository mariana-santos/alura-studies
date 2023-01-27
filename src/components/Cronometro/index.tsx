import Button from '../Botao'
import Relogio from './Relogio'
import style from './cronometro.module.scss'
import { ITarefa } from '../../types/tarefa'
import { useState } from 'react'
import { tempoParaSeg } from '../../common/utils/time'

interface Props{
    selecionado: ITarefa | undefined
}

export function Cronometro({selecionado} : Props){
    const [tempo, setTempo] = useState<Number>()

    if (selecionado?.tempo) setTempo(tempoParaSeg(selecionado.tempo))
    return(
        <div className={style.cronometro}>
            <h2>Please, choose a task from the list aside and then start the timer</h2>

            <div className={style.relogio_wrapper}>
                <div>
                    <Relogio/>
                </div>
                <Button type="button">Start</Button>
            </div>
        </div>
    )
}