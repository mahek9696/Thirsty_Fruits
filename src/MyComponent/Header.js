import React from 'react'
import logo from "../Media/logo4.jpg"
import { Link } from 'react-router-dom'
import {FaRegUserCircle} from 'react-icons/fa'
import {PiShoppingCartBold} from 'react-icons/pi'

const Header = () => {
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4'>
    
        <div className='flex items-center h-full justify-between'>
            <Link to ={""}>
            <div className='h-16'>
                <img src={logo} className="h-full"/>
            </div>
            </Link>

            <div className='flex iteams-center gap-6 md:gap-9'>
                <nav className='flex gap-4 md:gap6 text-base md:text-lg text-slate-60'>

                    <Link to = {""}>Home</Link>
                    <Link to = {"menu"}>Menu</Link>
                    <Link to = {"about"}>About Us</Link>
                    <Link to = {"contact"}>Contact</Link>

                </nav>
                <div className=''text-2xl text-slate-600>
                    <PiShoppingCartBold/>
                </div>
                <div className=''text-2xl text-slate-600>
                    <FaRegUserCircle/>
                </div>
            </div>
        </div> 
    
    </header>
  )
}

export default Header
