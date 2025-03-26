import React from "react";
import { motion } from "framer-motion";
import Button2 from "./Button2";

const Hero = () => {
  return (
    <div className="hero bg-black min-h-screen sm:mt-[18px] flex items-center justify-center">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* 3D Image Effect */}
        <motion.img
          src="https://i.pinimg.com/originals/f2/31/17/f231175cc4af23ccb0e07f3db7900397.jpg"
          alt="Gym Workout"
          className="w-[81vh] h-[54vh] sm:w-[125vh] sm:h-[90vh] rounded-lg shadow-2xl z-10"
          initial={{ scale: 0.8, rotateY: 20, opacity: 0 }}
          animate={{ scale: 1, rotateY: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            rotateY: 15,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        />
        <div>
          <h1 className="text-5xl font-bold text-white">Why Choose us?</h1>
          <p className="py-6 text-white">
          Choose NFC Gym for top-tier equipment, expert trainers, and a motivating environment. We offer personalized workout plans, diverse classes, and a supportive community to help you achieve your fitness goals. Train smarter, push harder, and see real results with us!
          </p>
         <Button2 />
        </div>
      </div>
    </div>
  );
};

export default Hero;
