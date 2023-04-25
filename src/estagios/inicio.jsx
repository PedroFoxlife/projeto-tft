import { useContext } from 'react'
import { CorpoContext } from '../context/corpo'
import React from 'react'
import tft from '../assets/1200px-Teamfight_Tactics_logo.svg.png'
import './inicio.css'
import ImgIncio from './ImgIncio'

const Inicio = () => {
    const [corpoState, dispatch] = useContext(CorpoContext);
    const todosCampeoes = corpoState.campeoes
    const campeoesAp = todosCampeoes.filter(i => i.caracteristica === 'ap')
    const campeoesAd = todosCampeoes.filter(i => i.caracteristica === 'ad')




    return (
        <div id='inicio'>
            <img src={tft} ></img>
            <p>ESCOLHA SUA PREFERENCIA DE COMPOSIÇÃO:</p>
            <div id='buttonWraper'>
                <button onClick={() => dispatch({ type: "CHANGE_AP" })}>AP</button>
                <button onClick={() => dispatch({ type: "CHANGE_AD" })}>AD</button>
            </div>

            <div id='informacoes'>
                <div id='infoAp'>
                    <p>Nas composições AP tempos os seguintes carregadores:</p>
                    {campeoesAp.map((i) => (
                        <ImgIncio img={i.img} />
                    ))}
                </div>

                <div id='infoAd'>
                    <p>Nas composições AD tempos os seguintes carregadores:</p>
                    {campeoesAd.map((i) => (
                        <ImgIncio img={i.img} key={i.img} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Inicio