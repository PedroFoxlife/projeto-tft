import React from 'react'
import { useContext } from 'react'
import { CorpoContext } from '../context/corpo'
import pinguim from '../assets/437-4371539_teamfight-tactics-penguin-png-transparent-png.png'
import './escolheuAP.css'
import BlocoEscolhas from './BlocoEscolhas'


const EscolheuAP = () => {
  const [corpoState, dispatch] = useContext(CorpoContext);
  const todosCampeoes = corpoState.campeoes
  const campeoesAp = todosCampeoes.filter(i => i.caracteristica === 'ap')

  const campeoesEscolhido = (nome) => {
    dispatch({
      type:"ESCOLHIDOA",
      payload: {nome}
    });
  }

  return (
    <div id='blocoAp'>
      <h2>Escolha um Carregador:</h2>
      <div>
        <div className='escolhas'>
          {campeoesAp.map(i => (
            <BlocoEscolhas
              img={i.img}
              nome={i.nome}
              key={i.nome}
              escolha={() => campeoesEscolhido(i.nome)} />
          ))}

        </div>

      </div>
      <img src={pinguim}></img>
      <button onClick={() => dispatch({ type: "CHANGE_BACK" })} >VOLTAR</button>

    </div>
  )
}

export default EscolheuAP





