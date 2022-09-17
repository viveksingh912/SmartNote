import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const history=useNavigate();
  let handleOut=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    history('/login');
  }
  return (
    <>
      <nav className="navbar  navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">IsmartNote</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
            </ul>
           {!localStorage.getItem('token') ? <form className="d-flex" role="search">
              <Link type="button" to="/login" className="btn btn-sm btn-secondary mx-1">Login </Link>
              <Link type="button" to="/signup" className="btn btn-sm btn-secondary mx-1">Signup</Link>
            </form>:<div><Link  to="/user"  className="btn btn-sm btn-secondary mx-3" ><i className="fa-solid fa-user"></i></Link>
            <Link type="button" to="/login" onClick={handleOut} className="btn btn-sm btn-secondary mx-1">Logout</Link></div>}
          </div>
        </div>
      </nav>
    </>
  )
}

