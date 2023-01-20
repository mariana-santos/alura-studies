import Button from '../Botao'
import Relogio from './Relogio'
import style from './cronometro.module.scss'

export function Cronometro(){
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