import React, { useEffect, useState } from "react"
import "./style.scss"
import { useNavigate } from "react-router-dom"
import useFetch from "../../../hooks/useFetch"
import { useSelector } from "react-redux"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import LazyLoadedImage from "../../../components/lazyLoadImage/LazyLoadImage"

const HeroBanner = () => {
  const [background, setBackground] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const { url } = useSelector((state) => state.homeReducer)
  const {data, loading} = useFetch("/movie/upcoming")
  const navigate = useNavigate()

  useEffect(() => {
    const backgroundImageUrl = url?.backdrop + data?.results[Math.floor(Math.random() * 20)]?.backdrop_path
    setBackground(backgroundImageUrl)
  },[])

  const searchQueryHandler = (event) => {
    console.log("===============aa",event)
    if (event.code == "Enter" && searchQuery.length > 0) {
      navigate(`/search/${searchQuery}`)
    }
  }

  return (
    <div className="heroBanner">
      {!loading ? <div className="backdrop-img">
        <LazyLoadedImage src={background}/>
      </div> : <></>}

      <div className="opacity-layer">

      </div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="search for movie or tv show..."
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>search</button>
          
          </div>
        </div>
      </ContentWrapper>
      
    </div>
  )
}

export default HeroBanner
