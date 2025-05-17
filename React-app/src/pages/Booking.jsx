import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router'

const Booking = () => {
  return (
    <div className='w-full h-[100%] background text-amber-50'>
      <Header />

      <div className="py-[100px] px-[200px]">
        <div className="p-10 card">
        <h1 className='text-[40px] font-bold text-center font-mono'>Book Now❗</h1>
          <form action="">

            <div className="mt-8 flex justify-between space-x-2">
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className='text-[25px]'>First Name</label>
                <input type="text" className='py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:' placeholder='Enter First Name'/>
              </div>
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className='text-[25px]'>Last Name</label>
                <input type="text" className='py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:' placeholder='Enter First Name'/>
              </div>
            </div>
            <div className="mt-8 flex justify-between space-x-2">
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className='text-[25px]'>Email</label>
                <input type="text" className='py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:' placeholder='Enter Email'/>
              </div>
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className='text-[25px]'>Phone</label>
                <input type="text" className='py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:' placeholder='Enter Phone'/>
              </div>
            </div>

            <div className="mt-10">
              <h1 className='text-[30px]'>Car choice</h1>
              <ul className='pl-2'>
                <li>Economy</li>
                <li>Standard</li>
                <li>Mid Full Suv</li>
                <li>Full Suv</li>
                <li>Minivan</li>
                <li>Pickup</li>
              </ul>
            </div>
            
            <div className="mt-10 flex justify-between space-x-2">
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className='text-[25px]'>Email</label>
                <input type="text" className='py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:' placeholder='Enter Email'/>
              </div>
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className='text-[25px]'>Phone</label>
                <input type="text" className='py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:' placeholder='Enter Phone'/>
              </div>
            </div>

            <div className="mt-10">
              <h1 className='text-[30px]'>Car Only Be Used in Addis Ababa City?</h1>
              <ul className='pl-2'>
                <li>Economy</li>
                <li>Standard</li>
              </ul>
            </div>

            <div className="mt-10 flex justify-between space-x-2">
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className='text-[25px]'>If not in Addis Ababa where is the Destination</label>
                <input type="text" className='py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:' placeholder='destination'/>
              </div>
            </div>

            <div className="mt-10 flex justify-between space-x-2">
              <div className="flex flex-col">
                <label htmlFor="" className='text-[25px]'>Message or More info (optional)</label>
                <input type="text" className='h-[100px]  py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:' placeholder='destination'/>
              </div>
            </div>

            <div className="mt-10">
              <button className='p-2 text-3xl text-black font-bold bg-[#16fe01] rounded-[10px]'>Submit</button>
            </div>

          </form>
        </div>
      </div>

      <div className='mt-[90px] px-20 flex justify-between items-center'>
          <div>
            <h1 className='text-[40px] font-bold'>Have more <span className='text-[#16fe01]'>Questions?</span></h1>
          </div>
          <div>
            <Link to='/Contact'><button className='btn'>Contact Us Now</button></Link>
          </div>
      </div>

      <Footer />
    </div>
  )
}

export default Booking