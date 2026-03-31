import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRelatedVideos, getVideoById } from '../redux/actions/videos.action'

/**
 * Hook to fetch and manage specific video details and its related videos.
 * @param {string} videoId 
 */
export const useVideoDetails = videoId => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (videoId) {
            dispatch(getVideoById(videoId))
            dispatch(getRelatedVideos(videoId))
        }
    }, [dispatch, videoId])

    const { video, loading: videoLoading } = useSelector(
        state => state.selectedVideo
    )
    const { videos: relatedVideos, loading: relatedVideosLoading } = useSelector(
        state => state.relatedVideos
    )

    return {
        video,
        videoLoading,
        relatedVideos,
        relatedVideosLoading,
    }
}
