import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../config/api';

export default function Meal() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);

  // ✅ Convert YouTube URL → Embed URL (safe)
  const getYoutubeEmbedUrl = (url) => {
    try {
      if (!url) return null;
      const videoId = new URL(url).searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    } catch {
      return null;
    }
  };

  const getData = async () => {
    setLoad(true);
    setErr(null);

    try {
      const response = await axios.get(`${baseUrl}/lookup.php`, {
        params: { i: id }
      });

      setData(response.data.meals[0]);
    } catch (err) {
      setErr(err.message);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (load) return <h1 className='text-white'>Loading...</h1>;
  if (err) return <h1 className='text-red-400'>{err}</h1>;
  if (!data) return <h1 className='text-white'>No data found</h1>;

  // ✅ Get embed URL once
  const videoUrl = getYoutubeEmbedUrl(data.strYoutube);

  return (
    <div className='my-11 px-10 text-white'>

      {/* 🔥 Top Section */}
      <div className='flex gap-10 flex-wrap'>
        <img
          src={data.strMealThumb}
          alt={data.strMeal}
          className='w-80 h-80 rounded-xl object-cover shadow-lg'
        />

        <div className='text-left max-w-xl'>
          <h1 className='text-3xl font-bold text-[#E3B55E]'>
            {data.strMeal}
          </h1>

          <p className='mt-3'>
            Category:
            <span className='text-[#E3B55E]'> {data.strCategory}</span>
          </p>

          <p className='mt-1'>
            Area:
            <span className='text-[#E3B55E]'> {data.strArea}</span>
          </p>
        </div>
      </div>

      {/* 🎬 YouTube Section (ONLY if valid video exists) */}
      {videoUrl && (
        <div className='mt-10'>
          <h2 className='text-2xl font-bold mb-4 text-[#E3B55E]'>
            Video Tutorial
          </h2>

          <iframe
            width="100%"
            height="400"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className='rounded-xl shadow-lg'
          ></iframe>
        </div>
      )}

      {/* 🔥 Ingredients Section */}
      <div className='mt-10 text-left'>
        <h2 className='text-2xl font-bold mb-4 text-[#E3B55E]'>
          Ingredients
        </h2>

        <ul className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {Object.keys(data)
            .filter((key) => key.includes("strIngredient") && data[key])
            .map((key) => {
              const index = key.replace("strIngredient", "");
              const measure = data[`strMeasure${index}`];

              return (
                <li
                  key={key}
                  className='bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 flex items-center gap-3
                  hover:bg-white/20 transition'
                >
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(data[key])}.png`}
                    alt={data[key]}
                    className='w-12 h-12 object-contain'
                  />

                  <div>
                    <p className='text-[#E3B55E] font-semibold text-sm'>
                      {measure}
                    </p>
                    <p className='text-sm'>
                      {data[key]}
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>

      {/* 🔥 Instructions Section */}
      <div className='mt-14 text-left w-screen -mx-10 px-10'>
        <h2 className='text-3xl font-bold mb-6 text-[#E3B55E]'>
          Instructions
        </h2>

        <div className='bg-white/10 backdrop-blur-md rounded-2xl p-6'>
          <p className='leading-8 text-gray-300 whitespace-pre-line text-lg'>
            {data.strInstructions}
          </p>
        </div>
      </div>

    </div>
  );
}
