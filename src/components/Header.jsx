import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
     <header className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
        <h1 className="text-3xl font-bold text-[#31433d]"> NUTRITION</h1>
        <div className="header-right">
        
            <div className=" flex gap-8 text-sm font-medium text-gray-700 items-center">
                <span><Link to={'/'}>HOME</Link></span>
                <span><Link to={'/about'}>ABOUT ME</Link></span>
                <span><Link to={'/contact'}>CONTACT</Link></span>
                <span><Link to={'/landing'}>LANDING</Link></span>
                
            </div>
            </div>
        </div>
    </header>

  )
}

export default Header