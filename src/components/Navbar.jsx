import React, { useState } from 'react'
import Img from '../assets/img/logoo.png'
import {nav} from '../constatnts/index'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [input, setInput]  = useState('')
  const [active, setActive] = useState('')
  return (
    <>
    <header className='w-full bg-black fixed top-0 px-8 mx-auto p-2 z-20'>
  <div className='w-full mx-auto'>

    <nav className='flex flex-row items-center justify-between'>
      <Link to='/'>

      <div className='flex flex-row items-center gap-2'>
        <img
          src={Img} alt='logo' className='w-12 h-12 object-contain'
          />
        <p className='text-3xl font-bold text-blue-700 max-sm:hidden block'>Movies</p>
      </div>
          </Link>

      <div className="w-1/3 rounded-xl max-md:w-2/4 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-transparent text-slate-100 px-2 py-1 rounded-sm border-2 border-gray-400 focus:outline-none shadow-xl"
          type="text"
          placeholder="Search here..."
        />
        <button 
        onClick={() => {
          window.location.href = `/movie?query=${input}`
        }}
        className='text-slate-100 rounded-sm bg-blue-800 px-6 max-sm:px-2 font-sans font-semibold text-[15px]'>Search</button>
      </div>
      <ul className='max-md:hidden flex gap-4 text-slate-100 font-serif font-semibold text-lg'>
        {nav.map((navItem, i) =>(
          <Link to={`${navItem.link}`} key={i}>
          <li
          onClick={() => {
            setActive(navItem.name)
          }}
          className={active === navItem.name ? `border-b-2 border-b-blue-500`: ``}>{navItem.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  </div>
</header>
<div>
<nav className='max-md:block hidden fixed bottom-0 z-20 px-8 mx-auto bg-black max-w-[1440px] w-full'>
  <ul className='flex gap-4 text-slate-100 font-serif font-semibold text-lg justify-between py-2'>
    <li className='border-b-2 border-b-orange-500'>Movies</li>
    <li>Tv Shows</li>
    <li>Tv Shows</li>
  </ul>
</nav>
</div>
    </>
  )
}

export default Navbar