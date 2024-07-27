import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './HeroBanner.scss'
import useFetch from '../../../hooks/useFetch'

const HeroBanner = () => {

  const [backround, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const {data,loading} = useFetch("/movie/upcoming")

  const searchQueryHandler = (e) => {

    if (query.length > 0) {
      navigate(`/search/${query}`)
    }

  }

  return (
    <>
      <div className="heroBanner">

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