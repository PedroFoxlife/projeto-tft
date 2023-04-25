import React from 'react'
import { useContext } from 'react'
import { CorpoContext } from '../context/corpo'
import BlocoEscolhas from './BlocoEscolhas'
import pinguim from '../assets/437-4371539_teamfight-tactics-penguin-png-transparent-png.png'
import './escolheuAP.css'


const EscolheuAd = () => {
  const [corpoState, dispatch] = useContext(CorpoContext);
  const todosCampeoes = corpoState.campeoes
  const campeoesAd = todosCampeoes.filter(i=> i.caracteristica === 'ad')

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
         {campeoesAd.map(i => (
            <BlocoEscolhas
            img={i.img}
            nome={i.nome}
            key={i.nome}
            escolha={() => campeoesEscolhido(i.nome)} />
         ))}
        </div>

      </div>
      <img src={pinguim}></img>
      <button onClick={() => dispatch({type:"CHANGE_BACK"})} >VOLTAR</button>

    </div>
  )
}

export default EscolheuAd

