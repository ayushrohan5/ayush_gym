import React from 'react'
import './../App.css';
import img1 from '../../src/assets/heart.png';
import img2 from '../../src/assets/heart.png';
import img3 from '../../src/assets/heart.png';
import {useState, useEffect} from 'react';
import AboutUsText from './AboutUsText';
function App() {

  return (
    <>
    <AboutUsText />
    <div className="hero bg-black text-white">
  <div className="hero-content flex-col lg:flex-row mt-[50px]">
    <img
      src="https://tiki.vn/blog/wp-content/uploads/2023/08/thumbnail-8.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">About <span className="advantages"> Us</span></h1>
      <p className="py-6">
      NFC Gym is a premier fitness destination committed to helping individuals achieve their health and wellness goals. With state-of-the-art equipment, expert trainers, and diverse workout programs, we provide a supportive and motivating environment for all fitness levels. Whether you're looking to build strength, improve endurance, or enhance overall well-being, NFC Gym offers personalized guidance and a community-driven atmosphere to keep you inspired. Join us and take your fitness journey to the next level!
      </p>
    </div>
  </div>
</div>
    </>
  );
}

export default App;