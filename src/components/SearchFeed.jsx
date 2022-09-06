import { Box, Typography } from "@mui/material"

import { fetchFromAPI } from '../utils/FetchApiVideos';

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Videos from "./Videos";



export const SearchFeed = () => { 
   
  // set videos to reuse Videos Component
    const [videos, setVideos] = useState([]);

    // get params
    const {searchTerm} = useParams()
  

    useEffect(() => {
        (fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((response) => setVideos(response.data.items)))
    }, [searchTerm])


    return (
    <Box p={2} minHeight="95vh">
      <Typography 
        variant="h4" 
        fontWeight={900}  
        color="white" mb={3} 
        ml={{ sm: "100px"}}
        >
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos data={videos} />}
      </Box>
    </Box>
)
  
}


export default SearchFeed;
