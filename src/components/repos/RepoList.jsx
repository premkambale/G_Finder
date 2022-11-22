import React, { useContext } from 'react'
import { useEffect } from 'react'
import Gitcontext from '../../git_context/Gitcontext'
import RepoItem from './RepoItem'

function RepoList() {



    const { repoArray, object } = useContext(Gitcontext)
    repoArray.length = 10


    return (
        <div className="rounded-lg shadow-lg card bg-base-100">
            <div className="card-body" style={{height:"80vh",overflowY : "scroll" }}>
                <h2 className="text-3xl my-4 font-bold card-title">
                    {
                    repoArray.length < 1 ? "No Repositories" : "Top Repositories"
                    }
                </h2>
                {
                    repoArray.map((repo) => {
                        return (

                            <RepoItem key={repo.id} repo ={repo}/>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default RepoList
