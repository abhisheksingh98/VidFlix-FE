import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login, MOCK_USERS } from '../../redux/actions/auth.action'

import './loginScreen.scss'

const VidFlixLogo = () => (
   <svg width='180' height='40' viewBox='0 0 180 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='44' height='40' rx='6' fill='#FF0000' />
      <polygon points='16,10 16,30 34,20' fill='white' />
      <text x='52' y='29' fontFamily='Arial, sans-serif' fontWeight='700' fontSize='22' fill='white'>VidFlix</text>
   </svg>
)

const LoginScreen = () => {
   const dispatch = useDispatch()
   const [selectedUser, setSelectedUser] = useState(0)

   const accessToken = useSelector(state => state.auth.accessToken)
   const loading = useSelector(state => state.auth.loading)

   const history = useHistory()

   useEffect(() => {
      if (accessToken) {
         history.push('/')
      }
   }, [accessToken, history])

   const handleLogin = () => {
      dispatch(login(selectedUser))
   }

   return (
      <div className='login'>
         <div className='login__container'>
            <VidFlixLogo />
            <h2>Welcome to VidFlix</h2>
            <p className='login__subtitle'>Choose a profile to continue</p>

            <div className='login__profiles'>
               {MOCK_USERS.map((user, i) => (
                  <div
                     key={i}
                     className={`login__profile ${selectedUser === i ? 'login__profile--active' : ''}`}
                     onClick={() => setSelectedUser(i)}>
                     <img src={user.photoURL} alt={user.name} className='rounded-circle' />
                     <span>{user.name}</span>
                  </div>
               ))}
            </div>

            <button
               onClick={handleLogin}
               disabled={loading}
               className='login__btn'>
               {loading ? 'Signing in…' : `Continue as ${MOCK_USERS[selectedUser].name}`}
            </button>

            <p className='login__note'>100% offline — no external accounts needed</p>
         </div>
      </div>
   )
}

export default LoginScreen
