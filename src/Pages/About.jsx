import react from "react"
import { FaInstagram, FaLinkedin } from "react-icons/fa"


const About = () => {
    const today_date = new Date().getFullYear()
    return (
        <>
            <h1 className='text-6xl mb-4'>Github Finder</h1>
            <p className='mb-4 text-2xl font-light text-capitalize'>
                React App to search profiles & repositories of github users

            </p>
            <div className="social-list-main d-flex align-center justify-content-start" style={{  textAlign: "center", width: "100%", height: "350px" }}>

                <div className="main d-flex align-items-center justify-content-center">
                    <div className="sub-main">

                        <div className="title text-capitalize mb-2" style={{color:"lime"}}>visit my profiles on</div>

                        <div className="social-icons d-flex justify-content-evenly p-3"  >

                            <a href="https://www.linkedin.com/in/prem-kambale-761795227" className="link-to-media">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/prem_2201/" className="link-to-media">
                                <FaInstagram />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About 