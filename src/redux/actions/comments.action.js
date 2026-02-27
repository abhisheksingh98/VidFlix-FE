import {
   COMMENT_LIST_FAIL,
   COMMENT_LIST_REQUEST,
   COMMENT_LIST_SUCCESS,
   CREATE_COMMENT_FAIL,
   CREATE_COMMENT_SUCCESS,
} from '../actionType'

import { getCommentsForVideo, saveCommentForVideo } from '../../data/mockData'

const delay = (ms = 250) => new Promise(resolve => setTimeout(resolve, ms))

export const getCommentsOfVideoById = id => async dispatch => {
   try {
      dispatch({ type: COMMENT_LIST_REQUEST })
      await delay()

      const items = getCommentsForVideo(id)
      dispatch({ type: COMMENT_LIST_SUCCESS, payload: items })
   } catch (error) {
      console.error(error.message)
      dispatch({ type: COMMENT_LIST_FAIL, payload: error.message })
   }
}

export const addComment = (id, text) => async (dispatch, getState) => {
   try {
      const { user } = getState().auth
      const name = user?.name || 'Anonymous'
      const photo = user?.photoURL || 'https://picsum.photos/seed/anon-av/40/40'

      saveCommentForVideo(id, name, photo, text)
      dispatch({ type: CREATE_COMMENT_SUCCESS })

      // Immediately reload comments (no artificial 3-second delay)
      dispatch(getCommentsOfVideoById(id))
   } catch (error) {
      console.error(error.message)
      dispatch({ type: CREATE_COMMENT_FAIL, payload: error.message })
   }
}
