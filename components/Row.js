"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaHeartCirclePlus, FaHeart, FaArrowLeft } from 'react-icons/fa';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


import Movies from './Movies';

const Row = ({ title, fetchURL, rowID }) => {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [adds, aetAdds] = useState(false);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(fetchURL);
                setMovies(response.data.results);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchData();
    }, [fetchURL]);

    // SLIDER BUTTON FUNCTION
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }



    return (
        < >
            <h1 className='text-white font-bold md:text-xl p-4'>{title}</h1>

            <div className='relative flex items-center group ' >
                <AiOutlineArrowLeft size={40} onClick={slideLeft} className='md:block hidden bg-white opacity-50 hover:opacity-100 rounded-full absolute z-10 text-black  cursor-pointer top-[45%] right-[95%] ' />

                <div id={'slider' + rowID} className='w-ful h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((movie, id) => (
                        <Movies key={id} movie={movie} />
                    ))}
                </div>
                <AiOutlineArrowRight size={40} onClick={slideRight} className='md:block hidden bg-white opacity-50 hover:opacity-100 rounded-full absolute z-10 text-black cursor-pointer top-[45%] left-[95%]' />

            </div>
        </>
    );
};

export default Row;
