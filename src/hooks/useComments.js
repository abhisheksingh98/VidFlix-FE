import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    addComment,
    getCommentsOfVideoById,
} from '../redux/actions/comments.action'

/**
 * Hook to manage comments for a specific video.
 * @param {string} videoId 
 */
export const useComments = videoId => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (videoId) {
            dispatch(getCommentsOfVideoById(videoId))
        }
    }, [dispatch, videoId])

    const { comments, loading } = useSelector(state => state.commentList)

    const handleAddComment = (text) => {
        dispatch(addComment(videoId, text))
    }

    return {
        comments,
        loading,
        addComment: handleAddComment,
    }
}
