import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Sem5 = () => {
  return (
    <>
      <Link className='btn btn-primary' to="/charusat/college/cspit/sem/fifthsem/os"> OS</Link>
      <Link className='btn btn-danger' to="/charusat/college/cspit/sem/fifthsem/se"> SE</Link>
      <Link className='btn btn-success' to="/charusat/college/cspit/sem/fifthsem/daa"> DAA</Link>

      <hr />
      <Outlet />
    </>
  )
}

export default Sem5;
