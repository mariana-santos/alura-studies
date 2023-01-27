import React, { useState } from 'react';
import { Cronometro } from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './app.module.scss'
import { ITarefa } from '../types/tarefa'

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function seleciona_tarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => (
      { 
        ...tarefa,
        //percorrendo todas as tarefas anteriores, se o id for igual ao da selecionada, 
        //a anterior com o mesmo id recebe selecionado: true
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      }
      )))
  }

  return (
    <div className={style.app_style}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={seleciona_tarefa}
        />
      <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
