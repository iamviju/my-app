import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className='nav-container'>
                <ul className="nav-menu">
                    <li className="nav-item">
                    <Link to="/add-employee" className="nav-links"> Add Employee  </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about" className="nav-links"> About  </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/blog" className="nav-links"> Blog  </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact" className="nav-links"> Contact  </Link>
                    </li>

                </ul>

            </div>
        </nav>
    </div>
  )
}

export default Navbar