import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Daa = () => {
    return (
        <div>
            <Link className='btn btn-danger' to="/charusat/college/cspit/sem/fifthsem/daa/vaishalimaam"> Vaishali Ma'am</Link>
            <Link className='btn btn-success m-1' to="/charusat/college/cspit/sem/fifthsem/daa/nikitamaam"> Nikita Ma'am</Link>
            <Outlet />
        </div>
    )
}

export default Daa;