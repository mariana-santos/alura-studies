import Button from '../Botao'
import Relogio from './Relogio'
import style from './cronometro.module.scss'
import { ITarefa } from '../../types/tarefa'
import { useEffect, useState } from 'react'
import { tempoParaSeg } from '../../common/utils/time'

interface Props{
    selecionado: ITarefa | undefined
    finalizarTarefa: () => void
}

export function Cronometro({selecionado, finalizarTarefa} : Props){
    const [tempo, setTempo] = useState<number>()

    //hook padrão do react que é acionado sempre que algo muda (nesse caso a var selecionado, 
    //que ta no array de dependencias do useEffect)
    useEffect(() => {

        if(selecionado?.tempo) setTempo(tempoParaSeg(selecionado.tempo))

    }, [selecionado])

    function regressiva(contador: number = 0){
        setTimeout(()=>{
            if(contador > 0) {
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
            finalizarTarefa()
        }, 1000)
    }

    return(
        <div className={style.cronometro}>
            <h2>Please, choose a task from the list aside and then start the timer</h2>

            <div className={style.relogio_wrapper}>
                <div>
                    <Relogio tempo={tempo} />
                </div>
                <Button type="button" onClick={() => regressiva(tempo)}>Start</Button>
            </div>
        </div>
    )
}