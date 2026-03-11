import React from 'react'
import Navbar from './../components/Navbar'
import Footer from "./../components/Footer"
import VegtableImg from './../assets/vegtable-img-png.png'
import freshimg from "./../assets/save-energy.png"
import deleveryimg from "./../assets/delivery-bike.png"
import vegtablevariety from "./../assets/vegtable-variety-png.png"
import FeaturesCard from '../components/FeaturesCard'
import Button from './../components/Button'
const FEATUES_CONFIG = [
  {
    title: "Fresh Vegetables",
    description: "We provide farm fresh vegetables.",
    imgSrc: freshimg,
  },
  {
    title: "Organic Quality",
    description: " vegetables are grown without harmful chemicals .",
    imgSrc: vegtablevariety,
  },
  {
    title: "Fast Delivery",
    description: " get a Delivered to quickly .",
    imgSrc: deleveryimg,
  },
];

function Home() {
  return (
    <div>
      <Navbar />

      <div className='min-h-screen bg-[#F9F6C4] px-3 md:px-10'>

        <div className='flex flex-col md:flex-row items-center justify-center py-8 gap-4'>

          <img
            src={VegtableImg}
            className='h-[200px]  sm:h-[300px] md:h-[400px]'
          />

          <div>
            <h1 className='text-[28px] sm:text-[35px] md:text-[70px] text-center text-[#eb0ebb]'>
              One plateform for all the vegtables you need
            </h1>
            <Button title={"Call Us"}
            variant='primary'
            size='medium'/>

          </div>
        </div>

        <h2 className='text-[20px] sm:text-[25px] md:text-[40px] text-[#333] text-center mt-6 mb-4 mx-2 md:my-10'>
          Why you should choosse us ? We provide th freshness vegtables
        </h2>

        <div className='flex flex-col gap-6 md:flex-row justify-around items-center pb-10' >
          {FEATUES_CONFIG.map((feat, index) => {
            const { title, description, imgSrc } = feat;
            return (
              <FeaturesCard
                key={index}
                title={title}
                description={description}
                imgSrc={imgSrc}
              />
            )
          })}
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Home