import React from 'react'
import Image from 'next/dist/client/image'
import  { forwardRef } from 'react';

const baseUrl="https://image.tmdb.org/t/p/original/"
const Thumnail =forwardRef( ({result},ref) => {
    return (
        <div ref={ref} className="result p-5 cursor-pointer transition-all duration-200 ease-in-out transform sm:hover:scale-105 ">
             <Image
              layout='responsive'
              objectFit="cover"
              height={1080}
              width={1920}
              className='max-w-md'
              src={`${baseUrl}${result.poster_path || result.backdrop_path}`} alt="Movie"/>
              <div>
                  <p className='truncate p-2'>{result.overview}</p>
                  <h3 className="transition text-xl duration-100 ease-in-out transform hover:font-bold">{result.title ||result.name ||result.original_name}</h3>
              </div>
        </div>
    )
})

export default Thumnail
