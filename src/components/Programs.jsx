import React from 'react'
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { GiGymBag } from "react-icons/gi";
import { SiOpenaigym } from "react-icons/si";
import { CgGym } from "react-icons/cg";

const Programs = () => {
  return (
    <>
    <div class="banner3">
  <div class="adtext2">
    <h1 className='text-3xl'>OUR <span class="advantages">SERVICES</span></h1>
    <p>Unlock Your Potential with NFC Gym – State-of-the-Art Equipment, Personalized Training, Group Classes, and Recovery Solutions for All Fitness Levels.</p>
  </div>
  <div class="starcard">
    <div class="card">
      <div class="icon">
        <MdOutlineSportsGymnastics />
      </div>
      <h2 className='advantages'>Personal Training</h2>
      <p>Customized workout plans with expert trainers to help you achieve your fitness goals efficiently.</p>
    </div>
    <div class="card">
      <div class="icon">
      <GiGymBag />
      </div>
      <h2 className='advantages'>Group Classes</h2>
      <p>High-energy sessions for strength, cardio, and flexibility, fostering motivation and community support.</p>
    </div>
    <div class="card">
      <div class="icon">
      <SiOpenaigym />
      </div>
      <h2 className='advantages'>Recovery & Wellness </h2>
      <p>Massage, stretching, and recovery tools to enhance performance and prevent injuries.</p>
    </div>
    <div class="card">
      <div class="icon">
      <CgGym />
      </div>
      <h2 className='advantages'>State-of-the-Art Equipment</h2>
      <p>Top-tier machines and free weights for a complete, effective training experience.</p>
    </div>
  </div>
</div>
    </>
  )
}

export default Programs