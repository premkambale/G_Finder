import React from 'react'
import { FaGit, FaGithub } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


function Navbar({ title }) {
    return (
        <nav className='navbar mb-4 shadow-lg bg-neutral text-neutral-content '>
            <div className="container mx-auto">
                <div className="felx-none px-2 mx-2">
                    <FaGithub className='inline pr-2 text-3xl' />
                    <NavLink exact to="/" className={'text-lg font-bold align-middle'} >
                        {title}
                    </NavLink>
                </div>

                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <NavLink exact to="/" className="btn btn-ghost btn-sm">Home</NavLink>
                        <NavLink exact to="/about" className="btn btn-ghost btn-sm">About</NavLink>
                    </div>
                </div>

            </div>

        </nav>
    )
}


Navbar.defaultProps = {
    title: "Github Finder"
}

export default Navbar
