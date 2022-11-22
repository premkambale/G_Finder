import {createContext, useReducer}  from "react"
import AlertReducer from "./AlertReducer"



const AlertContext = createContext()



export const AlertProvider = ({children})=>{

    const initialState ={
        massage:'',
        type:'',
    }

    const  [state ,dispatch] = useReducer(AlertReducer ,initialState)
    
    const setAlert = (massage,type)=>{

        dispatch({
            type:type,
            payload:{
                massage,
                type,
            }
        })
        setTimeout(()=>dispatch({type:"REMOVE_ALERT"}) , 3000)



    }


    return(
        <AlertContext.Provider
        value={{
            alert:state,
            setAlert,
            state

        }}
        >
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext

