import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Cspit = () => {
    return (
        <>
            <h1>Cspit</h1>
            <p>Chandubhai S Patel Institute of Technology, is the first institute established in year 2000 at Education Campus, Changa (now CHARUSAT).</p>
            <Link to="/charusat/college/cspit/sem" className="btn btn-danger">Read More</Link>
            <hr />
            <Outlet />
        </>
    )
}

export default Cspit
