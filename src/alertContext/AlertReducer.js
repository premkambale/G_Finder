

const AlertReducer = (state, action) => {

    switch (action.type) {

        case "SET_ALERT":
            return(action.payload)
        case "REMOVE_ALERT":
            return {
                state:{
                    massage:'',
                    type:'',
                }
            }
        
        default:
            return {
                state:{
                    massage:'',
                    type:'',
                }
            }
            
    }
}

export default AlertReducer