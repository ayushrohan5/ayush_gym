import React from 'react'
import Footer from '../components/Footer'
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import Navbar from '../components/Navbar'
import Button3 from '../components/Button3';

const Contact = () => {
  return (
    <>
      <Navbar />
        
      {/* Header Image & Title */}
      <div className="relative w-full">
        <img 
          src="https://olympiafitnessri.com/wp-content/uploads/2021/03/People-doing-pushups-together-in-a-health-club-class-853407238_5976x3984-scaled-e1615396175580.jpeg" 
          alt="Gym Training"
          className="h-[331px] w-full object-cover"
        />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl text-white font-bold">
          Contact <span className="advantages">Us</span>
        </span>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-black text-white px-8 py-8 text-center">
        <div>
          <IoCall className="text-yellow-300 text-4xl mx-auto mb-2" />
          <h4 className="font-bold">Phone</h4>
          <span className="text-gray-400">+01-3-8888-6868</span>
        </div>
        <div>
          <FaLocationDot className="text-yellow-300 text-4xl mx-auto mb-2" />
          <h4 className="font-bold">Address</h4>
          <span className="text-gray-400">60-49 Road 11378 New York</span>
        </div>
        <div>
          <CiClock2 className="text-yellow-300 text-4xl mx-auto mb-2" />
          <h4 className="font-bold">Open Time</h4>
          <span className="text-gray-400">10:00 am - 11:00 pm</span>
        </div>
        <div>
          <TfiEmail className="text-yellow-300 text-4xl mx-auto mb-2" />
          <h4 className="font-bold">Email</h4>
          <span className="text-gray-400">hello@colorlib.com</span>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7008.21144413189!2d77.3358772411248!3d28.56658787556377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b7d4af0dc1%3A0xc370dee296269b66!2sArun%20Vihar%2C%20Sector%2037%2C%20Noida%2C%20Uttar%20Pradesh%20201303!5e0!3m2!1sen!2sin!4v1713345898959!5m2!1sen!2sin"
          width="100%"
          height="400"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="bg-black py-10 px-6 md:px-16">
        <div className="text-center mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-white">Leave a Message</h1>
        </div>

        <form className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-2 border-2 border-gray-200 bg-black text-white placeholder-gray-500"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-4 py-2 border-2 border-gray-200 bg-black text-white placeholder-gray-500"
            />
          </div>
          <div className="mt-6">
            <textarea 
              placeholder="Message" 
              className="w-full h-36 px-4 py-2 border-2 border-gray-300 bg-black text-white placeholder-gray-500"
            ></textarea>
          </div>
          <div className="flex justify-center mt-6">
            <Button3 />
          </div>
        </form>
      </div>

      <Footer />
    </>
  )
}

export default Contact;
