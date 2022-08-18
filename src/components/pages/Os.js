import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Os = () => {
    return (
        <div>
            <Link className="btn btn-success" to="/charusat/college/cspit/sem/fifthsem/os/rikitamaam">Rikita Ma'am</Link>
            <Link className="btn btn-primary m-1" to="/charusat/college/cspit/sem/fifthsem/os/saritamaam">Sarita Ma'am</Link>
            <hr />
            <Outlet />
        </div>
    )
}

export default Os
