import Button from '../Botao'
import Relogio from './Relogio'
import style from './cronometro.module.scss'
import { ITarefa } from '../../types/tarefa'
import { useEffect, useState } from 'react'
import { tempoParaSeg } from '../../common/utils/time'
import Task_Info from './TaskInfo'

interface Props{
    selecionado: ITarefa | undefined
    finalizarTarefa: () => void
    deletarTarefa: (id: string) => void
}

export function Cronometro({selecionado, finalizarTarefa, deletarTarefa} : Props){
    const [tempo, setTempo] = useState<number>(0)
    const [isPaused, setPaused] = useState<boolean>(true)

    //hook padrão do react que é acionado sempre que algo muda (nesse caso a var selecionado, 
    //que ta no array de dependencias do useEffect)
    useEffect(() => {

        if(selecionado?.tempo) setTempo(tempoParaSeg(selecionado.tempo))

    }, [selecionado])

    useEffect(() => {

        // console.log(isPaused)

        // if (!isPaused) {
        //     // while(tempo > 0){
        //         setTempo(tempo - 1)
        //         console.log(tempo)
        //     // }
        // }

    }, [isPaused, tempo])

    function regressiva(contador: number = 0){
        // console.log(contador)

        setTimeout(() => {
            if(contador > 0 ) {
                setTempo(contador - 1)
                regressiva(contador - 1)
            }
            
            else finalizarTarefa()
            
        }, 1000)
    }

    return(
        <div className={style.cronometro}>
            {/* <h2>Please, choose a task from the list aside and then start the timer</h2> */}

            <div className={style.relogio_wrapper}>
                <div>
                    <Task_Info selecionado={selecionado} />
                    <Relogio tempo={tempo} />
                </div>

                <div>
                    <Button 
                        disabled={selecionado ? false : true} 
                        type="button" 
                        onClick={() => regressiva(tempo)}>
                        Start
                    </Button>

                    <Button
                        disabled={selecionado ? false : true} 
                        type="button" 
                        onClick={() => setPaused(isPaused ? false : true)}>
                            {isPaused ? 'Unpause' : 'Pause'}
                    </Button>

                    <Button 
                        type="button"
                        disabled={selecionado ? false : true} 
                        onClick={() => {
                            finalizarTarefa()
                            setTempo(0)
                            if(selecionado) selecionado.tempo = '00:00:00'
                            setPaused(true)
                    }}>
                        Done
                    </Button>

                    <Button 
                        type="button" 
                        disabled={selecionado ? false : true} 
                        onClick={() => { selecionado && deletarTarefa(selecionado.id) }}>
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    )
}