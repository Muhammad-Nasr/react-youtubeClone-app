import axios from "axios";

const obj = {
  id: {
    kind: "youtube#video",
    videoId: "mTz0GXj8NN0",
  },
  snippet: {
    publishedAt: "2021-01-26T21:03:52Z",
    channelId: "UC29ju8bIPH5as8OGnQzwJyA",
    title: "Next.js Crash Course",
    description:
      "In this video we will look at the fundamentals of Next.js such as SSR & SSG, routing, data fetching, apis and more Code: ...",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/mTz0GXj8NN0/default.jpg",
        width: 120,
        height: 90,
      },
      medium: {
        url: "https://i.ytimg.com/vi/mTz0GXj8NN0/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      high: {
        url: "https://i.ytimg.com/vi/mTz0GXj8NN0/hqdefault.jpg",
        width: 480,
        height: 360,
      },
    },
    channelTitle: "Traversy Media",
    publishTime: "2021-01-26T21:03:52Z",
  },
};

const APIKEY = "AIzaSyCvKgRfGvJxSG7U0pCKnEAt4DNGomJ9nrA";
const BASE_URL = `https://youtube.googleapis.com/youtube/v3`;

const options = {
  params: {
    maxResults: 50,
    key: "AIzaSyCvKgRfGvJxSG7U0pCKnEAt4DNGomJ9nrA",
  },
};

export const fetchFromAPI = async (url) => {
  const data = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
