"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import requests from "../utils/requests";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  {
    /* COVER PAGE */
  }
  {
    /* fetching  data/movies */
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requests.requestPopular);
        setMovies(response.data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
//   console.log(randomMovie);

const truncateString = (str , num) =>{
    if(str?.length > num){
        return str.slice(0,num) + "..."
    }else{
        return str;
    }
}


  {
    /* main part */}

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className=" absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
       
          {/* Image import */}

        <Image
          className="w-full h-full object-cover text-center"
          src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
          alt={randomMovie?.title}
          width="1600"
          height="800"
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8 ">
          <h1 className="text-3xl md:text-5xl font-bold">
            {randomMovie?.title}
          </h1>
              {/* Button  import */}
          <div className="my-5">
            <button className="border bg-gray-200 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border  text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
              {/* Text import */}
          <p className="text-[#d92525]">Relesed : {randomMovie?.release_date}</p>
          <p className="text-[#cccccc] text-sm md:w-[50%]">
            overview : {truncateString(randomMovie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

{
  /* Render your data here */
}
// {movies.map((item) => (
//     <div key={item.id}>
//       <div>{item.video}</div>
//     </div>
//   ))}
