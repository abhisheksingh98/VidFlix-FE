import {
   LOAD_PROFILE,
   LOGIN_FAIL,
   LOGIN_REQUEST,
   LOGIN_SUCCESS,
   LOG_OUT,
} from '../actionType'

// Mock user profiles for local login
const MOCK_USERS = [
   {
      name: 'Abhishek Singh',
      photoURL: 'https://picsum.photos/seed/abhishek-av/88/88',
   },
   {
      name: 'Alex Johnson',
      photoURL: 'https://picsum.photos/seed/alex-av/88/88',
   },
   {
      name: 'Priya Nair',
      photoURL: 'https://picsum.photos/seed/priya-av/88/88',
   },
]

/**
 * Local login — picks the selected profile and stores it in sessionStorage.
 * @param {number} userIndex - Index of MOCK_USERS to log in as (default 0)
 */
export const login = (userIndex = 0) => async dispatch => {
   try {
      dispatch({ type: LOGIN_REQUEST })

      // Simulate a tiny async delay for realism
      await new Promise(resolve => setTimeout(resolve, 400))

      const profile = MOCK_USERS[userIndex] || MOCK_USERS[0]
      const accessToken = `local-token-${Date.now()}`

      sessionStorage.setItem('ytc-access-token', accessToken)
      sessionStorage.setItem('ytc-user', JSON.stringify(profile))

      dispatch({ type: LOGIN_SUCCESS, payload: accessToken })
      dispatch({ type: LOAD_PROFILE, payload: profile })
   } catch (error) {
      console.error(error.message)
      dispatch({ type: LOGIN_FAIL, payload: error.message })
   }
}

export const log_out = () => async dispatch => {
   dispatch({ type: LOG_OUT })
   sessionStorage.removeItem('ytc-access-token')
   sessionStorage.removeItem('ytc-user')
}

export { MOCK_USERS }
