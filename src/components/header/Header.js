import React, { useState } from 'react'
import './_header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Inline SVG logo — no external CDN dependency
const VidFlixLogo = () => (
   <svg
      className='header__logo'
      width='110'
      height='28'
      viewBox='0 0 110 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <rect width='28' height='28' rx='4' fill='#FF0000' />
      <polygon points='10,7 10,21 22,14' fill='white' />
      <text x='34' y='21' fontFamily='Arial, sans-serif' fontWeight='700' fontSize='16' fill='white'>VidFlix</text>
   </svg>
)

const Header = ({ handleToggleSidebar }) => {
   const [input, setInput] = useState('')

   const history = useHistory()

   const handleSubmit = e => {
      e.preventDefault()
      if (input.trim()) history.push(`/search/${input.trim()}`)
   }
   const user = useSelector(state => state.auth?.user)

   return (
      <div className='header '>
         <FaBars
            className='header__menu'
            size={26}
            onClick={() => handleToggleSidebar()}
         />

         <VidFlixLogo />

         <form onSubmit={handleSubmit}>
            <input
               type='text'
               placeholder='Search'
               value={input}
               onChange={e => setInput(e.target.value)}
            />
            <button type='submit'>
               <AiOutlineSearch size={22} />
            </button>
         </form>

         <div className='header__icons'>
            <MdNotifications size={28} />
            <MdApps size={28} />
            {user?.photoURL ? (
               <img src={user.photoURL} alt='avatar' />
            ) : (
               <div className='header__avatar-placeholder'>
                  {user?.name?.charAt(0) || 'U'}
               </div>
            )}
         </div>
      </div>
   )
}

export default Header
