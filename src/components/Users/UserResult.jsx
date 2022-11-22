import React,{useEffect ,useState} from "react";
import axios from "axios"
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import Gitcontext from "../../git_context/Gitcontext";
import { useContext} from "react";


const UserResult  = ()=>{

const {getUsers ,loading , users} = useContext(Gitcontext)


    // useEffect(()=>{
    //     getUsers()
    // },[])


    return(
        loading ?  <Spinner/>
        :
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map((user)=>{
                return(
                   <><UserItem key={user.id} user={user}/></>
                )
            })}
        </div>
    )

}

export default UserResult