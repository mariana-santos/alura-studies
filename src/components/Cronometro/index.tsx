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
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState<boolean>(false)

    //hook padrão do react que é acionado sempre que algo muda (nesse caso a var selecionado, 
    //que ta no array de dependencias do useEffect)
    useEffect(() => {

        if(selecionado?.tempo) setTempo(tempoParaSeg(selecionado.tempo))

    }, [selecionado])

    useEffect(() => {

        let intervalId: any = null;

        if (isRunning) {
          intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
          }, 1000);

          if(timeLeft === 0) {
            finalizarTarefa()
            setIsRunning(false)
          }

        } 
        
        else if (!isRunning && timeLeft !== 0) {
          clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
      }, [isRunning, timeLeft]);


    const handleStart = () => {
        setIsRunning(true);
        setTimeLeft(tempo);
    };

    const handlePause = () => {
        setIsRunning(isRunning ? false : true)
    };

    return(
        <div className={style.cronometro}>
            {/* <h2>Please, choose a task from the list aside and then start the timer</h2> */}

            <div className={style.relogio_wrapper}>
                <div>
                    <Task_Info selecionado={selecionado} />
                    <Relogio tempo={timeLeft} />
                </div>

                <div>
                    <Button 
                        disabled={selecionado ? false : true} 
                        type="button" 
                        hasIcon
                        iconName="start"
                        onClick={handleStart}>
                        Start
                    </Button>

                    <Button
                        disabled={selecionado ? false : true} 
                        type="button" 
                        hasIcon
                        iconName={ isRunning ? 'pause' : 'play' }
                        onClick={handlePause}>
                            { isRunning ? 'PAUSE' : 'UNPAUSE' }
                    </Button>

                    <Button 
                        type="button"
                        hasIcon
                        iconName="done"
                        disabled={selecionado ? false : true} 
                        
                        onClick={() => {
                            finalizarTarefa()
                            setTimeLeft(0)
                            setIsRunning(false)
                    }}>
                        Done
                    </Button>

                    <Button 
                        type="button" 
                        hasIcon
                        iconName="delete"
                        disabled={selecionado ? false : true} 
                        onClick={() => { selecionado && deletarTarefa(selecionado.id) }}>
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    )
}