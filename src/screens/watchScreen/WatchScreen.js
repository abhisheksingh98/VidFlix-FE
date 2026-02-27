import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Comments from '../../components/comments/Comments'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import { Helmet } from 'react-helmet'
import {
   getRelatedVideos,
   getVideoById,
} from '../../redux/actions/videos.action'
import './watchScreen.scss'

// Offline video player — shows a stylised placeholder with the mock title
const OfflineVideoPlayer = ({ title }) => (
   <div className='watchScreen__offlinePlayer'>
      <div className='watchScreen__offlinePlayer-inner'>
         <svg width='64' height='64' viewBox='0 0 64 64' fill='none'>
            <circle cx='32' cy='32' r='32' fill='rgba(255,255,255,0.08)' />
            <polygon points='24,18 24,46 50,32' fill='white' opacity='0.9' />
         </svg>
         <p>{title || 'Offline Video Player'}</p>
         <span>This is an offline demo — no external video stream required.</span>
      </div>
   </div>
)

const WatchScreen = () => {
   const { id } = useParams()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getVideoById(id))
      dispatch(getRelatedVideos(id))
   }, [dispatch, id])

   const { videos, loading: relatedVideosLoading } = useSelector(
      state => state.relatedVideos
   )

   const { video, loading } = useSelector(state => state.selectedVideo)

   return (
      <Row>
         <Helmet>
            <title>{video?.snippet?.title || 'VidFlix'}</title>
         </Helmet>
         <Col lg={8}>
            <div className='watchScreen__player'>
               <OfflineVideoPlayer title={video?.snippet?.title} />
            </div>
            {!loading ? (
               <VideoMetaData video={video} videoId={id} />
            ) : (
               <h6>Loading...</h6>
            )}

            <Comments
               videoId={id}
               totalComments={video?.statistics?.commentCount}
            />
         </Col>
         <Col lg={4}>
            {!relatedVideosLoading ? (
               videos
                  ?.filter(video => video.snippet)
                  .map(video => (
                     <VideoHorizontal video={video} key={video.id?.videoId || video.id} />
                  ))
            ) : (
               <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                  <Skeleton width='100%' height='130px' count={15} />
               </SkeletonTheme>
            )}
         </Col>
      </Row>
   )
}

export default WatchScreen
