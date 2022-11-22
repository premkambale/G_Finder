import { createContext, useState, useReducer } from "react"
import axios from "axios"
import GitReducers from "./GitReducer"



const Gitcontext = createContext()




export const GitProvider = ({ children }) => {

    //this will be my initial state
    const initialState = {

        users: [],    //state for storing uers
        loading: false,//state for check loading or not 
        user: {},
        repoArray: []
    }


    // this is the code for using Reducer that we have created in GitReducers File
    const [state, dispatch] = useReducer(GitReducers, initialState)
    const [object, setObject] = useState({})
    // const [users , setUsers] = useState([])
    // const [loading , setLoading] = useState(true)


    const getUsers = () => {

        setLoader();
        axios.get(process.env.REACT_APP_GITHUB_URL)
            .then(async (res) => {
                const Result = await res.data
                //    setUsers(Result)
                //    setLoading(false)

                // dispatch is to update the states
                dispatch({
                    type: "Get_Users",
                    payload: Result
                },)

            })
            .catch((err) => {
                console.log(err)
            })
    }

    //function to show the loader
    const setLoader = () => {
        dispatch({
            type: "SET_LOADING",
        })
    }



    const clearUser = () => {
        dispatch({
            type: "CLEAR_USERS"
        })
    }



    const searchUser = (name) => {
        axios.get(`http://api.github.com/search/users?q=${name}`)
            .then(async (res) => {
                const user = await res.data.items
                dispatch({
                    type: "SEARCH_USER",
                    payload: user

                })
            })
            .catch((err) => {
                console.log(err)
            })
    }


    //function to get user'name from userItem component
    const getUrl = (url) => {
        axios.get(url)
            .then((res) => {
                const single_user = res.data
                dispatch(
                    {
                        type: "GET_SINGLE_USER",
                        payload: single_user
                    }
                )
            }).catch((err) => {
                console.log(err)
            })



    }



    const getRepo = (repoArray) => {
         dispatch(
            {
                type: "GET_REPO_ARR",
                payload: repoArray
            }
        )


    }

    const getObject = (object)=>{
        setObject(object)

    }


    //function to get all ripositories sunig url 




    return (
        <Gitcontext.Provider
            value={{
                // user: state.user,
                // users: state.users,
                // loading: state.loading,
                // repoArray: state.repoArray,
                ...state,
                object,
                getUsers,
                searchUser,
                clearUser,
                getUrl,
                getRepo,
                getObject,



            }}
        >
            {children}
        </Gitcontext.Provider>


    )
}
export default Gitcontext