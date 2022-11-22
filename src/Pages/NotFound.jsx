import react from "react"
import { FaHome } from "react-icons/fa"
import { NavLink } from "react-router-dom"


const NotFound = () => {

    return (
        <>
            <div className="hero">
                <div className="text-center hero-content">
                    <div className="max-w-lg">
                        <h1 className="text-8xl font-bold-mb-8">
                            Oops
                        </h1>
                        <p className="text-5xl mb-4">404 -Page Not Found</p>
                        <NavLink exact to="/" className="btn btn-primary btn-lg"><FaHome className="mr-2"/>Back To Home</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound 