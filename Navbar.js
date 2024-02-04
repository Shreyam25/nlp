import React from 'react'
import logo from './logo.jpg'
// import PropTypes from 'propTypes'
export default function Navbar(props) {
  return (
<nav className={`bg-${props.mode} flex justify-between pt--5`}>
        <div className="flex items-center"> 
            <img src={logo} className="w-14 mx-5  rounded-full hidden md:block" alt="Logo" />
            <div className="flex items-center text-5xl font-extrabold"> 
            <span className={`text-${props.mode === 'white' ? 'black' : 'white'} font-serif`}>Blog</span>
                <p className="text-gray-400 font-serif italic mb-0 ml-1">Bite</p>
            </div>
        </div>
        <ul className={`space-x-20 text-2xl text-${props.mode === 'white' ? 'black' : 'white'} flex pt-4 justify-end font-mono font-bold`}>
            <li className="cursor-pointer pl-4">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Domains</li>
        </ul>
        <div className='pt-5 pr-10'>
<label className="relative   cursor-pointer">
  <input type="checkbox"   onClick={props.toggleMode} className="sr-only peer"/>
  <div className="w-11 h-6  bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-black-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label></div>

      </nav>
  )
}
