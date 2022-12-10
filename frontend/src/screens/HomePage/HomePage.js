import {React,useState,useEffect} from 'react'
import './HomePage.css'
import Header from '../../components/Header/Header'
import LandingPage from '../../components/LandingPage/LandingPage'
import MovieList from '../../components/MovieList/MovieList'
import axios from 'axios'


const HomePage = () => {
  const [movielist,setMovielist] = useState([])

  const fetchList = async(req,res)=>{
    //const item = await axios.get(`/movielist${type ? "?type=" + type: ""} & ${genre ? "&genre="+genre: ""}`)
    const item = await axios.get('/movielist')
    setMovielist(item.data)
    }
  useEffect(()=>{
    fetchList()
  },[])
  return (
    <div className = "home-main">
      <Header/>
      <LandingPage/>
      {movielist.map((movie)=> (<MovieList  movie = {movie} />))}
     
    </div>
  )
}

export default HomePage
