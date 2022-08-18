import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Sem = () => {
    return (
        <>
            <Link to="/charusat/college/cspit/sem/fifthsem" type="button" className='btn btn-warning'>5 Semester</Link>
            <hr />
            <Outlet />
        </>
    )
}

export default Sem
