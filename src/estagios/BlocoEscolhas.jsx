import React from 'react'
import { useContext } from 'react'
import { CorpoContext } from '../context/corpo'

const BlocoEscolhas = ({img, nome,escolha}) => {
  const [corpoState, dispatch] = useContext(CorpoContext);
  return (
    <div>
      <div id='escolha' onClick={()  => escolha()} >
        <h3>Carregador:</h3>
        <img src={img} />

      </div>
    </div>
  )
}

export default BlocoEscolhas
