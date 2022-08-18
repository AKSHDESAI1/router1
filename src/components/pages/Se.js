import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Se = () => {
    return (
        <div>
            <Link className="btn btn-success" to="/charusat/college/cspit/sem/fifthsem/se/snehamaam">Sneha Ma'am</Link>
            <hr />
            <Outlet />
        </div>
    )
}

export default Se