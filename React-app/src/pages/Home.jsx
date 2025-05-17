import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <div className="w-full h-[100%] background text-amber-50">
        <Header />
        <div className="flex pt-[150px] pl-[40px] relative">
          <div className="w-[50%]">
            <h1 className="text-[45px]">
              <span className="text-[60px] text-[#16fe01] font-bold">
                TRAVEL-X
              </span>{" "}
              CAR RENTAL SERVICE IN ETHIOPIA
            </h1>
            <p className="text-[22px] my-6">
              Daily or Weekly Car Rentals <br />
              for Your Business or Visiting Travel Plans
            </p>
            <div className="flex mt-2 space-x-2.5">
              <button className="btn mt-3">View Our Cars</button>
              <button className="btn mt-3">Our Services</button>
            </div>
          </div>

          <div className="w-[60%] flex">
            <img
              src="mercedis.png"
              className="w-[700px] h-fit absolute right-[10px] hover:scale-10 hover:transition-1s"
              alt=""
              srcset=""
            />
          </div>
        </div>

        <div className="w-full mt-50 flex">
          <div className="w-[50%] pl-10">
            <h1 className="text-[40px] font-bold">
              WELCOME TO THE BEST CAR RENTAL SERVICE IN TOWN.
            </h1>
            <h1 className="text-[22px] text-[#16fe01] py-2">
              The Quality Customer Service You Deserve
            </h1>
            <p className="text-[18px]">
              We care for our customers and make sure their stay in Ethiopia is
              smooth and memorable.  From the time we pick you up from the
              Airport or Hotel to the entire time of your stay in the country,
              we will help you to enjoy your travel in Addis Ababa and other
              tourist destination locations.
            </p>
            <button className="mt-5 btn">CHOOSE YOUR RIDE</button>
          </div>
          <div className="w-[50%] flex justify-center">
            <img src="MersedisFront.png" alt="" srcset="" />
          </div>
        </div>
        <div className="w-full h-fit flex justify-around mt-[250px] space-x-3">
          <div className="w-[23%] h-fit py-3 flex flex-col items-center card">
            <img src="compact.png" alt="" srcset="" />
            <h1 className="text-[50px] text-white font-bold">Compact</h1>
            <p className="text-[25px] text-white ">From $1560 a Day</p>
            <button className="btn mt-3">Book Now</button>
          </div>
          <div className="w-[23%] h-fit py-3 flex flex-col items-center card">
            <img src="economy.png" alt="" srcset="" />
            <h1 className="text-[50px] text-white font-bold">Economy</h1>
            <p className="text-[25px] text-white ">From $2070 a Day</p>
            <button className="btn mt-3">Book Now</button>
          </div>
          <div className="w-[23%] h-fit pt-10 pb-2 flex flex-col items-center card">
            <img src="midsuv.png" alt="" srcset="" />
            <h1 className="text-[50px] text-white font-bold">Mid Suv</h1>
            <p className="text-[25px] text-white ">From $1770 a Day</p>
            <button className="btn mt-3">Book Now</button>
          </div>
          <div className="w-[23%] h-fit py-3 flex flex-col items-center card">
            <img src="minivan.png" alt="" srcset="" />
            <h1 className="text-[50px] text-white font-bold">Mini Van</h1>
            <p className="text-[25px] text-white ">From $2570 a Day</p>
            <button className="btn mt-3">Book Now</button>
          </div>
        </div>

        <div className="w-full h-fit mt-30 flex flex-col items-center">
          <div className="py-10">
            <h1 className="text-6xl text-center font-bold">
              EASY BOOKING STEPS
            </h1>
            <h1 className="text-[30px] text-[#16fe01] text-center mt-6">
              How to book your car with us and Start enjoying your ride
            </h1>
          </div>

          <div className="w-full h-fit mt-5 flex justify-around">
            <div className="w-[30%] px-3 pt-3 pb-5 text-[30px] font-bold card">
              <img src="carlist.png" className="rounded-2xl" alt="" srcset="" />
              <h1 className="mt-2 ml-3">
                <span className="text-[#16fe01]">01</span>
                <br />
                CLICK THE RIDE
              </h1>
            </div>
            <div className="w-[30%] px-3 pt-3 pb-5 text-[30px] font-bold card">
              <img src="send.jpg" className="rounded-2xl" alt="" srcset="" />
              <h1 className="mt-2 ml-3">
                <span className="text-[#16fe01]">02</span>
                <br />
                SEND A REQUEST
              </h1>
            </div>
            <div className="w-[30%] px-3 pt-3 pb-5 text-[30px] font-bold card">
              <img src="enjoy.jpg" className="rounded-2xl" alt="" srcset="" />
              <h1 className="mt-2 ml-3">
                <span className="text-[#16fe01]">03</span>
                <br />
                ENJOY THE RIDE
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-[200px] px-20 flex justify-between items-center">
          <div>
            <h1 className="text-[40px] font-bold">
              COME & TRY OUR <span className="text-[#16fe01]">SERVICES</span>
            </h1>
            <h2 className="text-[20px] text-2xl">
              We Always Have The Best Customer Services In Town
            </h2>
          </div>
          <div>
            <Link to="Booking">
              <button className="btn">See our cars →</button>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
