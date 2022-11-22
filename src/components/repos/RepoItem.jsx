import React from 'react'
import propTypes from "prop-types"
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'

function RepoItem({ repo }) {

    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count
    } = repo
    console.log(repo)

    return (

            <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
                <div className="card-body p-2" >
                    <h3 className="mb-2 text-xl font-semibold">
                        <a href={ html_url } style={{ color: "skyblue" }}>
                            <FaLink className='inline mr-1' />{name}
                        </a>
                    </h3>
                    <p className="mb-3">{description}</p>
                    <div>
                        <div className="mr-2 badge badge-info badge-lg">
                            <FaEye className='mr-2' />{watchers_count}
                        </div>

                        <div className="mr-2 badge badge-success badge-lg">
                            <FaStar className='mr-2' />{stargazers_count}
                        </div>

                        <div className="mr-2 badge badge-error badge-lg" style={{ backgroundColor: "#d756f4" }}>
                            <FaInfo className='mr-2' />{open_issues}
                        </div>

                        <div className="mr-2 badge badge-warning badge-lg" style={{ backgroundColor: "lime" }}>
                            <FaUtensils className='mr-2' />{forks}
                        </div>
                    </div>
                </div>
            </div>
    )
}


RepoItem.propTypes = {
    repo: propTypes.object
}

export default RepoItem
