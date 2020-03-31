import React from "react"
import { Link } from "gatsby"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile,  } from "../utils/auth"

const Home = ({ user }) => {
    return <p>Hi, {user.name ? user.name : "friend"}!</p>
}
const SAMDMS = () => <p>SAMDMS</p>

const index = () => {
    if (!isAuthenticated()) {
        login()
        return <p>Redirecting to login...</p>
    }

    const user = getProfile()
    return (
    <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/mapping/samdms">SAMDMS</Link>
            <a 
            href="#logout"
            onClick={e => {
                logout()
                e.preventDefault()
            }}
            >
                Log Out
            </a>
        </nav>
        <Router>
            <Home path="/mapping" />
            <SAMDMS path="/mapping/samdms" />
        </Router>
        </>
    )
}

export default index