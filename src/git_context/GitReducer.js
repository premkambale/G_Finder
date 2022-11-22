const GitReducers = (state, action) => {
    switch (action.type) {
        case "Get_Users":
            return (
                {
                    ...state,
                    users: action.payload,
                    loading: false
                }
            );
        case "SET_LOADING":
            return ({
                ...state,
                loading: true
            });

        case "SEARCH_USER":
            return (
                {
                    ...state,
                    users: action.payload,
                    loading: false
                }
            )
        case "CLEAR_USERS":
            return (
                {
                    ...state,
                    users: [],
                }
            )
        case "GET_SINGLE_USER":
            return (
                {
                    ...state,
                    user: action.payload,
                    loading: false

                }
            )


            case "GET_REPO_ARR" :
                return({
                    ...state,
                    repoArray : action.payload,

                })

        default:
            return state
    }
}

export default GitReducers