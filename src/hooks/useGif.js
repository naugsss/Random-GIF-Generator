import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Tag from '../components/Tag';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// ye h standar url hamari, but isko const ke andar access krna h 
// const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}}`;
// const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');


    
    async function fetchData(tag){
      setLoading(true);
      //instead of using fetch we will use axios and make a get request
      const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
      const imagesource = data.data.images.downsized_large.url;
      setGif(imagesource)
      setLoading(false);
    }
  
    useEffect(() => {
      fetchData()
    }, [])

    return {gif, loading, fetchData};
}

export default useGif
