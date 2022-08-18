import React from 'react'
import {Link, Outlet} from "react-router-dom";

const College = () => {
    return (
        <>
            <div className="m-5">
                <Link to="/charusat/college/cspit" type="button" className='btn btn-primary m-1'>Cspit</Link>
                <Link to="/charusat/college/depstar" type="button" className='btn btn-primary'>Depstar</Link>

                <Outlet />
            </div>
        </>
    )
}

export default College
