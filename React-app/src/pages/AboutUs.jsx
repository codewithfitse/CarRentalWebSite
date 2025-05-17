import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router'

const AboutUs = () => {
  return (
    <div className='w-full h-fit background text-amber-50'>
      <Header />
      
      <div className='pt-[150px] flex flex-col items-center'>
        <h1 className='text-[50px] font-bold'>
          We are TRAVEL-X Car Rentals
        </h1>
        <p className='w-[90%] text-[20px] text-center'>
        We are a full Car Rental service provider in Addis Ababa, Ethiopia with Daily, Weekly even Monthly rates for your business or pleasure travels in Ethiopia.
        At our car rental company, we strive to provide our customers with convenient and affordable transportation solutions, while also offering top-quality vehicles and exceptional customer service. We are committed to making the car rental experience as hassle-free and enjoyable as possible for our customers, so they can focus on their plans and experiences, rather than worrying about transportation.
        Our cars come with professional and courteous drivers who will make your stay in Ethiopia a worry-free one.
        </p>
        <div className='w-full my-[60px] flex justify-around'>
          <Link to='/Contact'><button className='btn'>CONTACT US NOW</button></Link>
          <Link to='/Contact'><button className='btn'>WORK WITH US</button></Link>
        </div>
      </div>

      <div className='mt-[100px] flex justify-center'>
        <div className='w-[30%]'></div>
        <div className='w-[70%]'>
          <h1 className='text-[22px]'><span className='text-[40px] text-[#16fe01] font-bold '>We</span> understand choosing rental services might be difficult and time consuming task. At TRAVEL-X Rental we always try to make it easier by providing detailed information.</h1>
          <div className='mt-10 grid grid-cols-2 gap-2'>
            <div className="w-full h-[200px] pl-5 flex items-center space-x-5 card">
              <div className="p-3 flex item-center bg-[#16fe01] rounded-full">
                <img src="Icons/car.png" className='w-10 h-10' alt="" srcset="" />
              </div>
              <div className='w-[70%] flex flex-col justify-center'>
                <h1 className='text-[30px] font-bold'>Lowest price</h1>
                <p>                 
                  We promise to give you the lowest price rate in town for the car you choose.
                </p>
              </div>
            </div>
            <div className="w-full h-[200px] pl-5 flex items-center space-x-5 card">
              <div className="p-3 flex item-center bg-[#16fe01] rounded-full">
                <img src="Icons/car.png" className='w-10 h-10' alt="" srcset="" />
              </div>
              <div className='w-[70%] flex flex-col justify-center'>
                <h1 className='text-[30px] font-bold'>We love serving</h1>
                <p className='w-[95%]'>                 
                 We want you to be a happy customer. With us it is not a one time deal.
                </p>
              </div>
            </div>
            <div className="w-full h-[250px] pl-5 flex items-center space-x-5 card">
              <div className="p-3 flex item-center bg-[#16fe01] rounded-full">
                <img src="Icons/car.png" className='w-10 h-10' alt="" srcset="" />
              </div>
              <div className='w-[70%] flex flex-col justify-center'>
                <h1 className='text-[30px] font-bold'>Professional</h1>
                <p>
                Our friendly and knowledgeable staff will give you a tour with all the information to make your visit of Addis Ababa and other parts of Ethiopia a memorable experience.
                </p>
              </div>
            </div>
            <div className="w-full h-[250px] pl-5 flex items-center space-x-5 card">
              <div className="p-3 flex item-center bg-[#16fe01] rounded-full">
                <img src="Icons/car.png" className='w-10 h-10' alt="" srcset="" />
              </div>
              <div className='w-[70%] flex flex-col justify-center'>
                <h1 className='text-[30px] font-bold'>Lowest price</h1>
                <p>                 
                  We promise to give you the lowest price rate in town for the car you choose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[150px] px-20 flex justify-between items-center'>
          <div>
            <h1 className='text-[40px] font-bold'>COME & TRY OUR <span className='text-[#16fe01]'>SERVICES</span></h1>
            <h2 className='text-[20px] text-2xl'>We Always Have The Best Customer Services In Town</h2>
          </div>
          <div>
            <Link to='/Booking'><button className='btn'>See our cars →</button></Link>
          </div>
        </div>

      <Footer />
    </div>
  )
}

export default AboutUs