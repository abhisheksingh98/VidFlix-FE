import {
   CHANNEL_DETAILS_FAIL,
   CHANNEL_VIDEOS_REQUEST,
   CHANNEL_VIDEOS_SUCCESS,
   HOME_VIDEOS_FAIL,
   HOME_VIDEOS_REQUEST,
   HOME_VIDEOS_SUCCESS,
   RELATED_VIDEO_FAIL,
   RELATED_VIDEO_REQUEST,
   RELATED_VIDEO_SUCCESS,
   SEARCHED_VIDEO_FAIL,
   SEARCHED_VIDEO_REQUEST,
   SEARCHED_VIDEO_SUCCESS,
   SELECTED_VIDEO_FAIL,
   SELECTED_VIDEO_REQUEST,
   SELECTED_VIDEO_SUCCESS,
   SUBSCRIPTIONS_CHANNEL_FAIL,
   SUBSCRIPTIONS_CHANNEL_REQUEST,
   SUBSCRIPTIONS_CHANNEL_SUCCESS,
} from '../actionType'

import {
   MOCK_VIDEOS,
   MOCK_SUBSCRIPTIONS,
   PLAYLIST_MAP,
   getVideoById as _getVideoById,
   getVideosByChannelId,
   searchVideos,
   getVideosByCategory as _getVideosByCategory,
   getRelatedVideos as _getRelatedVideos,
} from '../../data/mockData'

const PAGE_SIZE = 12

// Simulate a brief async wait so loading skeletons are visible
const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms))

export const getPopularVideos = () => async (dispatch, getState) => {
   try {
      dispatch({ type: HOME_VIDEOS_REQUEST })
      await delay()

      const pageToken = getState().homeVideos.nextPageToken || 0
      const start = Number(pageToken)
      const page = MOCK_VIDEOS.slice(start, start + PAGE_SIZE)
      const nextPageToken = start + PAGE_SIZE < MOCK_VIDEOS.length
         ? start + PAGE_SIZE
         : null

      dispatch({
         type: HOME_VIDEOS_SUCCESS,
         payload: {
            videos: page,
            nextPageToken,
            category: 'All',
         },
      })
   } catch (error) {
      console.error(error.message)
      dispatch({ type: HOME_VIDEOS_FAIL, payload: error.message })
   }
}

export const getVideosByCategory = keyword => async (dispatch, getState) => {
   try {
      dispatch({ type: HOME_VIDEOS_REQUEST })
      await delay()

      const all = _getVideosByCategory(keyword)
      const pageToken = getState().homeVideos.nextPageToken || 0
      const start = Number(pageToken)
      const page = all.slice(start, start + PAGE_SIZE)
      const nextPageToken = start + PAGE_SIZE < all.length ? start + PAGE_SIZE : null

      dispatch({
         type: HOME_VIDEOS_SUCCESS,
         payload: {
            videos: page,
            nextPageToken,
            category: keyword,
         },
      })
   } catch (error) {
      console.error(error.message)
      dispatch({ type: HOME_VIDEOS_FAIL, payload: error.message })
   }
}

export const getVideoById = id => async dispatch => {
   try {
      dispatch({ type: SELECTED_VIDEO_REQUEST })
      await delay()

      const video = _getVideoById(id)
      if (!video) throw new Error(`Video ${id} not found`)

      dispatch({ type: SELECTED_VIDEO_SUCCESS, payload: video })
   } catch (error) {
      console.error(error.message)
      dispatch({ type: SELECTED_VIDEO_FAIL, payload: error.message })
   }
}

export const getRelatedVideos = id => async dispatch => {
   try {
      dispatch({ type: RELATED_VIDEO_REQUEST })
      await delay()

      const related = _getRelatedVideos(id)
      // Shape them as search results so VideoHorizontal works correctly
      const shaped = related.map(v => ({
         ...v,
         id: { kind: 'youtube#video', videoId: v.id },
      }))

      dispatch({ type: RELATED_VIDEO_SUCCESS, payload: shaped })
   } catch (error) {
      console.error(error.message)
      dispatch({ type: RELATED_VIDEO_FAIL, payload: error.message })
   }
}

export const getVideosBySearch = keyword => async dispatch => {
   try {
      dispatch({ type: SEARCHED_VIDEO_REQUEST })
      await delay()

      const results = searchVideos(keyword)
      // Shape them like YouTube search results
      const shaped = results.map(v => ({
         ...v,
         id: { kind: 'youtube#video', videoId: v.id },
      }))

      dispatch({ type: SEARCHED_VIDEO_SUCCESS, payload: shaped })
   } catch (error) {
      console.error(error.message)
      dispatch({ type: SEARCHED_VIDEO_FAIL, payload: error.message })
   }
}

export const getSubscribedChannels = () => async dispatch => {
   try {
      dispatch({ type: SUBSCRIPTIONS_CHANNEL_REQUEST })
      await delay()
      dispatch({ type: SUBSCRIPTIONS_CHANNEL_SUCCESS, payload: MOCK_SUBSCRIPTIONS })
   } catch (error) {
      console.error(error.message)
      dispatch({ type: SUBSCRIPTIONS_CHANNEL_FAIL, payload: error.message })
   }
}

export const getVideosByChannel = id => async dispatch => {
   try {
      dispatch({ type: CHANNEL_VIDEOS_REQUEST })
      await delay()

      const channelVideos = getVideosByChannelId(id)
      // Shape as playlist items matching the snippet structure expected by Video.js
      const shaped = channelVideos.map(v => ({
         ...v,
         id: { kind: 'youtube#video', videoId: v.id },
      }))

      dispatch({ type: CHANNEL_VIDEOS_SUCCESS, payload: shaped })
   } catch (error) {
      console.error(error.message)
      dispatch({ type: CHANNEL_DETAILS_FAIL, payload: error.message })
   }
}
