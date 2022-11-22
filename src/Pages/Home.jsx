import react, { useState } from "react"
import UserSearch from "../components/Users/UserSearch"
import UserResult from "../components/Users/UserResult"


const Home = () => {

 

 
  return (
    <>
      <div>
        {/* this component contain the all users that fetched by  api */}
        <UserSearch  />
          <div className="show-scroll" style={{ height: "55vh", overflowY: "scroll" }}>
            <UserResult />
          </div>


      </div>
    </>
  )
}

export default Home 