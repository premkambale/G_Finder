import React,{useContext ,useState ,useEffect} from "react"
import { propTypes } from "prop-types"
import {NavLink} from "react-router-dom"
import Gitcontext from "../../git_context/Gitcontext"

const UserItem = ({ user: { login, avatar_url,id}  }) => {
 
 

    return (
        <div className='card shadow-md compact side bg-base-100' style={{backgroundColor:"white" , color:'black'}}>
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={avatar_url} alt="Profile" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='card-title'>{login}</h2>
                    <NavLink className='text-base-content text-opacity-40' to={`/user/${id}`} style={{ color:'black'}}>visit Profile</NavLink>
                </div>
            </div>
        </div>
    )
}


export default UserItem