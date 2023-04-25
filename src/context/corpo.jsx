import { createContext, useReducer } from "react";
import campeoes from "../data/campeoes";



const STAGES = ["Inicio", "EscolhasAD", "EscolhasAP", "EscolhidoA","EscolhidoB"]

const inicialState = {
    siteStage: STAGES[0],
    campeoes,
    escolhido: ''


}

const inicioReducer = (state, action) => {


    switch (action.type) {
        case "CHANGE_AP":
            return {
                ...state,
                siteStage: STAGES[2],
            }

        case "CHANGE_AD":
            return {
                ...state,
                siteStage: STAGES[1],
            }
        case "CHANGE_BACK":
            return {
                ...state,
                siteStage: STAGES[0],
            }
        case "ESCOLHIDOA":
            return {
                ...state,
                siteStage: STAGES[3],
                escolhido: action
            }
        case "ESCOLHIDOB":
            return {
                ...state,
                siteStage: STAGES[4],
                escolhido: action
            }



        default:
            return state;
    }
}

export const CorpoContext = createContext()

export const CorpoProvider = ({ children }) => {
    const value = useReducer(inicioReducer, inicialState);
    return <CorpoContext.Provider value={value}>{children}</CorpoContext.Provider>
}