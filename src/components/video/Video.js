import React from 'react'
import './_video.scss'

import { AiFillEye } from 'react-icons/ai'
import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useHistory } from 'react-router-dom'
import { getChannelById } from '../../data/mockData'

const Video = ({ video, channelScreen }) => {
   const {
      id,
      snippet: {
         channelId,
         channelTitle,
         title,
         publishedAt,
         thumbnails: { medium },
      },
      statistics,
      contentDetails,
   } = video

   // Support both raw id string and shaped { videoId } object
   const _videoId = id?.videoId || contentDetails?.videoId || id

   // Duration — parse ISO 8601 (e.g. PT18M42S)
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

   // Channel icon from local mock data (no API call)
   const channelIcon = getChannelById(channelId)?.snippet?.thumbnails?.default

   const history = useHistory()

   const handleVideoClick = () => {
      history.push(`/watch/${_videoId}`)
   }

   return (
      <div className='video' onClick={handleVideoClick}>
         <div className='video__top'>
            <LazyLoadImage src={medium.url} effect='blur' />
            <span className='video__top__duration'>{_duration}</span>
         </div>
         <div className='video__title'>{title}</div>
         <div className='video__details'>
            <span>
               <AiFillEye /> {numeral(views).format('0.a')} Views •{' '}
            </span>{' '}
            <span> {moment(publishedAt).fromNow()} </span>
         </div>
         {!channelScreen && (
            <div className='video__channel'>
               <LazyLoadImage src={channelIcon?.url} effect='blur' />
               <p>{channelTitle}</p>
            </div>
         )}
      </div>
   )
}

export default Video
