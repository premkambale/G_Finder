import react, { useState, useContext } from "react"
import Gitcontext from "../../git_context/Gitcontext"
import AlertContext from "../../alertContext/AlertContext"
import AlertBox from "../layout/AlertBox"



const UserSearch = ( ) => {


    const { users ,searchUser ,clearUser } = useContext(Gitcontext)
    const {setAlert} = useContext(AlertContext) 



    const [text, setText] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        if (text == '') {
            setAlert('Please Enter User To Search' , "SET_ALERT")
        }
        else {
            searchUser(text)
            setText('')
        }
    }

   
    return (
        <>
            <div className="grid grid-cols-2 xl-grid-cols-2 lg-grid-cols-2 md-grid-cols-1 gap-8 mb-8">
                <div>
                    <form onSubmit={handleSubmit} >
                        <AlertBox/>
                        <div className="form-control p-0 mt-2">
                            <div className="relative" style={{ position: "relative" }}>
                                <input
                                    type="text"
                                    className="w-full pr-40 bg-gray-200 input input-lg text-black"
                                    placeholder="Search"
                                    value={text}
                                    onChange={e => setText(e.target.value)}
                                />
                                <button type="submit" className=" top-0 right-0 rounded-l-none w-36 btn btn-lg" style={{ position: "absolute" }}>Go</button>

                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    {
                        users.length >= 1 &&
                        <button className="btn btn-ghost btn-lg" onClick={()=>clearUser()}>Clear</button>
                    }
                </div>
            </div>
        </>
    )
}

export default UserSearch