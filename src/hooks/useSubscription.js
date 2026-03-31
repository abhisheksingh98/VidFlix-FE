import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    checkSubscriptionStatus,
    getChannelDetails,
    toggleSubscription,
} from '../redux/actions/channel.action'

/**
 * Hook to manage channel details and subscription status.
 * @param {string} channelId 
 */
export const useSubscription = channelId => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (channelId) {
            dispatch(getChannelDetails(channelId))
            dispatch(checkSubscriptionStatus(channelId))
        }
    }, [dispatch, channelId])

    const {
        channel,
        loading: channelLoading,
        subscriptionStatus,
    } = useSelector(state => state.channelDetails)

    const handleToggleSubscription = () => {
        dispatch(toggleSubscription(channelId, subscriptionStatus))
    }

    return {
        channel,
        channelLoading,
        subscriptionStatus,
        toggleSubscription: handleToggleSubscription,
    }
}
