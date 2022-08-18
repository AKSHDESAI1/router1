import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Charusat = () => {
    return (
        <>
            <Link to="/charusat/college" type="button" className='btn btn-primary'>Charusat</Link>
            <Outlet />
        </>
    )
}

export default Charusat;
