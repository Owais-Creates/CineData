import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './HeroBanner.scss'
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'

const HeroBanner = () => {

  const [backround, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home)
  const { data, loading } = useFetch("/movie/upcoming")



  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
    setBackground(bg);
  }, [data])

  const searchQueryHandler = (e) => {

    if (query.length > 0) {
      navigate(`/search/${query}`)
    }

  }

  return (
    <>
      <div className="heroBanner">

        <div className="backdrop-img">

        </div>

        <div className="wrapper">

          <div className="heroBannerContent">

            <span className="title">
              Welcome
            </span>
            <span className="subTitle">
              Millions of movies, TV shows and people to discover. Explore now
            </span>

            <div className="searchInput">
              <input
                type="text"
                placeholder='search for a movie or tv show...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              // onKeyUp={(e) => searchQueryHandler(e)}
              />

              <button onClick={searchQueryHandler} >Search</button>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default HeroBanner