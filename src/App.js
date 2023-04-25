import { useContext } from 'react'
import { CorpoContext } from './context/corpo'
import Inicio from './estagios/inicio';
import './App.css';
import EscolheuAP from './estagios/escolheuAP';
import EscolheuAD from './estagios/escolheuAD';
import Escolhido from './estagios/Escolhido';
import EscolhidoB from './estagios/escolhidoB'


function App() {
  const [corpoState,dispatch] = useContext(CorpoContext);
  return (
    <div className='App'>  

  {corpoState.siteStage === "Inicio" && <Inicio/>}
  {corpoState.siteStage === "EscolhasAP" && <EscolheuAP/>}
  {corpoState.siteStage === "EscolhasAD" && <EscolheuAD/>}
  {corpoState.siteStage === "EscolhidoA" && <Escolhido/>}
  {corpoState.siteStage === "EscolhidoB" && <EscolhidoB/>}

    </div>

  );
}

export default App;
