import React from 'react'
import { useContext } from 'react'
import { CorpoContext } from '../context/corpo'
import BlocoEscolhas from './BlocoEscolhas'
import './Escolhido.css'

const EscolhidoB = () => {
    const [corpoState, dispatch] = useContext(CorpoContext);
    const CampEscolhido = corpoState.campeoes.filter(i => i.nome === corpoState.escolhido.payload.nome)
    const campeoesFiltrado = corpoState.campeoes.filter(i => i.caracteristica === CampEscolhido[0].caracteristica)
    const filtroFinal = campeoesFiltrado.filter(i => i.nome !== CampEscolhido[0].nome)



    const campeoesEscolhido = (nome) => {
        dispatch({
            type: "ESCOLHIDOB",
            payload: { nome }
        });
    }

    return (
        <div id='CampEscolhido'>
            <div id='c1'>
                <h1>{CampEscolhido[0].nome}</h1>
                <img src={CampEscolhido[0].img} ></img>
            </div>

            <div id='itens'>
                <h4>Melhores Itens:</h4>
                {CampEscolhido[0].itens.map(i => (
                    <p>{i.nome}</p>
                ))}
            </div>

            <div id='composicao'>
                <h4>Composição ideal:</h4>
                {CampEscolhido[0].composicaoBase.map(i => (
                    <img src={i}></img>
                ))}
            </div>

            <div id='naoBateu'>
                <h4>Opções Viaveis</h4>
                {filtroFinal.map(i => (
                    <BlocoEscolhas
                        img={i.img}
                        nome={i.nome}
                        key={i.nome}
                        escolha={() => campeoesEscolhido(i.nome)} />
                ))}

            </div>
            <button onClick={() => dispatch({ type: "CHANGE_BACK" })} >VOLTAR</button>
        </div>

    )
}

export default EscolhidoB