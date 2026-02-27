import React from 'react'
import './_videoHorizontal.scss'

import { AiFillEye } from 'react-icons/ai'
import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { getChannelById } from '../../data/mockData'

const VideoHorizontal = ({ video, searchScreen, subScreen }) => {
   const {
      id,
      snippet: {
         channelId,
         channelTitle,
         description,
         title,
         publishedAt,
         thumbnails: { medium },
         resourceId,
      },
      statistics,
      contentDetails,
   } = video

   const isVideo = !(id.kind === 'youtube#channel' || subScreen)

   // Parse ISO 8601 duration (e.g. PT31M05S)
   const parseDuration = iso => {
      const match = iso?.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
      if (!match) return '0:00'
      const h = parseInt(match[1] || 0)
      const m = parseInt(match[2] || 0)
      const s = parseInt(match[3] || 0)
      const totalSeconds = h * 3600 + m * 60 + s
      return moment.utc(totalSeconds * 1000).format(h > 0 ? 'H:mm:ss' : 'm:ss')
   }

   const _duration = parseDuration(contentDetails?.duration)
   const views = statistics?.viewCount || '0'

   // Channel icon from local mock data — no API call
   const channelIcon = getChannelById(channelId)?.snippet?.thumbnails?.default

   const history = useHistory()

   const _channelId = resourceId?.channelId || channelId
   const _videoId = id?.videoId || id

   const handleClick = () => {
      isVideo
         ? history.push(`/watch/${_videoId}`)
         : history.push(`/channel/${_channelId}`)
   }

   const thumbnail = !isVideo && 'videoHorizontal__thumbnail-channel'

   return (
      <Row
         className='py-2 m-1 videoHorizontal align-items-center'
         onClick={handleClick}>
         <Col
            xs={6}
            md={searchScreen || subScreen ? 4 : 6}
            className='videoHorizontal__left'>
            <LazyLoadImage
               src={medium.url}
               effect='blur'
               className={`videoHorizontal__thumbnail ${thumbnail} `}
               wrapperClassName='videoHorizontal__thumbnail-wrapper'
            />
            {isVideo && (
               <span className='videoHorizontal__duration'>{_duration}</span>
            )}
         </Col>
         <Col
            xs={6}
            md={searchScreen || subScreen ? 8 : 6}
            className='p-0 videoHorizontal__right'>
            <p className='mb-1 videoHorizontal__title'>{title}</p>

            {isVideo && (
               <div className='videoHorizontal__details'>
                  <AiFillEye /> {numeral(views).format('0.a')} Views •
                  {moment(publishedAt).fromNow()}
               </div>
            )}

            {(searchScreen || subScreen) && (
               <p className='mt-1 videoHorizontal__desc'>{description}</p>
            )}

            <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
               {isVideo && (
                  <LazyLoadImage src={channelIcon?.url} effect='blur' />
               )}
               <p className='mb-0'>{channelTitle}</p>
            </div>
            {subScreen && (
               <p className='mt-2'>
                  {video.contentDetails?.totalItemCount} Videos
               </p>
            )}
         </Col>
      </Row>
   )
}

export default VideoHorizontal
