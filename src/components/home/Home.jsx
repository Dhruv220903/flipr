import React from 'react'
import MainSection from '../main/MainSection';
import About from '../about/About'
import Categories from '../categories/Categories'
import Testimonials from '../testimonials/Testimonials'
import FeaturedPost from '../featuredPost/FeaturedPost';
import Aau from '../aau/Aau';
import Authors from '../authors/Authors';
import Joinus from '../joinus/Joinus';
const Home = () => {
  return (
    <div>
      <MainSection></MainSection>
      <FeaturedPost></FeaturedPost>
      <Aau></Aau>
      <About></About>
      <Categories></Categories>
      <Authors></Authors>
      <Testimonials></Testimonials>
      <Joinus></Joinus>
    </div>
  )
}

export default Home
