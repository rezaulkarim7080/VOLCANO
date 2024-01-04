"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaHeartCirclePlus, FaHeart } from 'react-icons/fa';
import { IoIosHeart } from "react-icons/io";

const Movies = ({ movie }) => {
    const [movies, setMovies] = useState([]);
    const [adds, aetAdds] = useState(false);

    return (

        <div className='p-2 w-[200px] sm:w-[240px] md:w-[350px] cursor-pointer inline-block relative'>
            <Image
                className='h-full w-full block'
                src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                alt={movie?.title}
                width={200}
                height={100}
            />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100  text-white duration-300 '>
                <p className=' whitespace-normal text-xs md:text-2xl flex justify-center py-12  '>{movie?.title}</p>

                <p>
                    <div>
                        {adds ? <IoIosHeart className="absolute bottom-4 right-5 " size={20} /> : <IoIosHeart className="absolute bottom-4 right-5 " size={20} />}
                    </div>
                </p>
            </div>
        </div>

    );
};

export default Movies;