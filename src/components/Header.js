import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <header>
        <nav>
            <div className = 'left'>
                <h1>TaskGenie</h1>
            </div>
            <div className= 'right'>
                <ul>
                    <li>
                        <NavLink to='/'>TaskGenie</NavLink>
                    </li>
                    <li>
                        <NavLink to='/signin'>SignIn</NavLink>
                    </li>
                    <li>
                         <NavLink to='/signup'>SignUp</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Join as a Tasker</NavLink>
                    </li>
                </ul>
            </div>

        </nav>
    </header>
    </>
  )
}