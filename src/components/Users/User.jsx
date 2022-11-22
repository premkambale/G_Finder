import React, { useContext, useEffect, useState } from 'react'
import { useParams, useSearchParams } from "react-router-dom"
import Gitcontext from '../../git_context/Gitcontext'
import { FaCodepen, FaStore, FaUsers, FaUserFriends } from "react-icons/fa"
import Spinner from '../layout/Spinner'
import { NavLink } from "react-router-dom"
import axios from 'axios'
import RepoList from '../repos/RepoList'


function User() {

    const param = useParams()
    const { users, getUrl, user, getRepo ,getObject } = useContext(Gitcontext)
    const [object, setObject] = useState({})
    getObject(object)
    const params = useSearchParams({
        sort :'created',
        per_page : 10
    })
 
    useEffect(() => {


        
        users.filter((user) => {
            if (+param.id === user.id) {
                setObject(user)
                getUrl(user.url)


               

                axios.get(`${user.url}/repos?${params}`)
                    .then((res) => {
                        getRepo(res.data)


                    })
                    .catch((err) => {
                        console.log("cant find repository")
                    })
            }
        })




    }, [param.id])


    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
        type,
        twitter_username
    } = user;


    return (
        Object.keys(object) == 0 ? <Spinner /> :
            <>
                <div className="w-full mx-auto lg:w-10/12" style={{ height: "auto" }}>
                    <div className="mb-4">
                        <NavLink to="/" className="btn btn-ghost">Got To Search</NavLink>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                        <div className="custom-card-image mb-6 md:mb-0">
                            <div className="rounded-lg shadow-xl card image-full ">
                                <figure style={{ backgroundColor: "white" }}>
                                    <img src={avatar_url} alt="Profile Picture"  />
                                </figure>
                                <div className="card-body justify-end p-2">
                                    <h2 className="card-title mb-0" style={{ color: "white" }}>
                                        {name}
                                    </h2>
                                    <p style={{ color: "white" }}>{login}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2">
                            <div className="mb-6">
                                <h1 className="text-3xl card-title">
                                    {name}
                                    <div className="ml-2 mr-1 badge badge-success">
                                        {type}
                                    </div>
                                    {
                                        hireable && (
                                            <div className="mx-1 badge badge-info">
                                                Hireable
                                            </div>
                                        )
                                    }
                                </h1>
                                <p>{bio}</p>
                                <div className="mt-4 card-actions">
                                    <a href={html_url} target='_blank' rel='noreferrer' className='btn btn-outline'>Visit Github Profile</a>
                                </div>
                            </div>
                            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                                {
                                    location && (
                                        <div className="stat">
                                            <div className="stat-title text-md">
                                                Location
                                            </div>
                                            <div className="text-lg stat-value">
                                                {location}
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    blog && (
                                        <div className="stat">
                                            <div className="stat-title text-md">
                                                Website
                                            </div>
                                            <div className="text-lg stat-value">
                                                <a href={`https://${blog}`}
                                                    target="_blank" rel='noreferrer'>Visite Blog</a>
                                            </div>
                                        </div>
                                    )
                                }

                                {
                                    twitter_username && (
                                        <div className="stat">
                                            <div className="stat-title text-md">
                                                Twitter
                                            </div>
                                            <div className="text-lg stat-value">
                                                <a href={`https://twitter.com/${twitter_username}`}
                                                    target="_blank" rel='noreferrer'>{twitter_username}</a>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="w-full py-2 mb-6 rounded-lg shadow-md bg-base-100 stats" id="hor-scroll">
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaUsers className='text-3xl md:text-5xl' color='lime' />
                            </div>
                            <div className="stat-title " style={{ paddingLeft: "23px" }}>
                                Followers
                            </div>
                            <div className="stat value pr-5 text-3xl md:text-4xl">
                                {followers}
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaUserFriends className='text-3xl md:text-5xl' color='#ff00e1' />
                            </div>
                            <div className="stat-title " style={{ paddingLeft: "23px" }}>
                                following
                            </div>
                            <div className="stat value pr-5 text-3xl md:text-4xl">
                                {following}
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaCodepen className='text-3xl md:text-5xl' color='lime' />
                            </div>
                            <div className="stat-title " style={{ paddingLeft: "23px" }}>
                                Public Repos
                            </div>
                            <div className="stat value pr-5 text-3xl md:text-4xl">
                                {public_repos}
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaStore className='text-3xl md:text-5xl' color='#ff00e1' />
                            </div>
                            <div className="stat-title " style={{ paddingLeft: "23px" }}>
                                Public Gists
                            </div>
                            <div className="stat value pr-5 text-3xl md:text-4xl">
                                {public_gists}
                            </div>
                        </div>
                    </div>
                    <RepoList />
                </div>



            </>
    )
}

export default User



