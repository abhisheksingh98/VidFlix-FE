import {
   CHANNEL_DETAILS_FAIL,
   CHANNEL_DETAILS_REQUEST,
   CHANNEL_DETAILS_SUCCESS,
   SET_SUBSCRIPTION_STATUS,
} from '../actionType'

import { getChannelById } from '../../data/mockData'

const SUBSCRIBED_CHANNELS_KEY = 'vidflix-subscribed-channels'

const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms))

const getSubscribedChannels = () => {
   try {
      return JSON.parse(localStorage.getItem(SUBSCRIBED_CHANNELS_KEY) || '[]')
   } catch {
      return []
   }
}

export const getChannelDetails = id => async dispatch => {
   try {
      dispatch({ type: CHANNEL_DETAILS_REQUEST })
      await delay()

      const channel = getChannelById(id)
      if (!channel) throw new Error(`Channel ${id} not found`)

      dispatch({ type: CHANNEL_DETAILS_SUCCESS, payload: channel })
   } catch (error) {
      console.error(error.message)
      dispatch({ type: CHANNEL_DETAILS_FAIL, payload: error.message })
   }
}

export const checkSubscriptionStatus = id => async dispatch => {
   try {
      const subscribed = getSubscribedChannels()
      dispatch({ type: SET_SUBSCRIPTION_STATUS, payload: subscribed.includes(id) })
   } catch (error) {
      console.error(error.message)
   }
}

export const toggleSubscription = (id, currentStatus) => async dispatch => {
   const subscribed = getSubscribedChannels()
   let updated
   if (currentStatus) {
      updated = subscribed.filter(c => c !== id)
   } else {
      updated = [...subscribed, id]
   }
   localStorage.setItem(SUBSCRIBED_CHANNELS_KEY, JSON.stringify(updated))
   dispatch({ type: SET_SUBSCRIPTION_STATUS, payload: !currentStatus })
}
