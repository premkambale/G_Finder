import React, { useContext } from 'react'
import { useState } from 'react'
import AlertContext from '../../alertContext/AlertContext'

function AlertBox() {
    const { state } = useContext(AlertContext)
     
    return (
        <>
            {
            !state.massage == '' &&  <h1 style={{ color:"#C3DCF4"}}>{state.massage}</h1>
            }
        </>
    )
}

export default AlertBox
