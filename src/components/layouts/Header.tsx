import React from 'react'
import PATHS from '../../router/paths'
import { Link } from 'react-router-dom'

const headerMenus = [
    {id: 1,path: PATHS.home, label: 'Home' },
    {id: 2,path: PATHS.dashboard.index, label: 'Dashboard' },
    {id: 3,path: PATHS.dashboard.usersList, label: 'Dashboard Users' },
    {id: 4,path: PATHS.aboutUs, label: 'About Us' },
    {id: 5,path: PATHS.contactUs, label: 'Contact Us' }
]

const Header = () => {
  return (
    <div className='p-2 space-x-3 bg-sky-300 text-white'>
        {/* <Link to={PATHS.home}>Home</Link>
        <Link to={PATHS.dashboard.index}>Dashboard</Link>
        <Link to={PATHS.dashboard.usersList}>User List</Link>
        <Link to={PATHS.aboutUs}>About Us</Link>
        <Link to={PATHS.contactUs}>Contact Us</Link> */}
        {
            headerMenus.map(item => 
                <Link key={item.id} to={item.path} className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  p-1 rounded-sm'>
                    {item.label}
                </Link>)
        }
    </div>
  )
}

export default Header