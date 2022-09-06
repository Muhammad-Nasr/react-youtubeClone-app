import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import { fetchFromAPI } from '../utils/FetchApiVideos'
import ChannelCard from './ChannelCard'
import Videos from './Videos'

const ChannelDetail = () => {
    // channel detail to reuse channel card
    const [channelDetail, setChannelDetail] = useState(null)

    // videos to reuse videos component
    const [videos, setVideos] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((response) => setChannelDetail(response.data.items[0]))

        fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`)
        .then((response) => setVideos(response.data.items))

    }, [id])
    
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
       <Videos data={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail