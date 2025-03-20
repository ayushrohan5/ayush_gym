import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Use react-router-dom

const Navbar = () => {
  const StyledButtonWrapper = styled.div`
    .Btn {
      width: 120px !important;
    }
  `;

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white p-4 z-50 gap-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-lg font-bold">
            <img className="w-[185px] h-[40px]" src="/logo.PNG" alt="Company Logo" />
          </span>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-400">About us</Link>
          {/* <a href="#services" className="text-white hover:text-gray-400">Services</a>
          <a href="#footer" className="text-white hover:text-gray-400">
              Contact Us
            </a>
            <a href="#testimonials" className="text-white hover:text-gray-400">Our Testimonials</a> */}
        </div>

        <div className="hidden md:block">
          <Button />
        </div>

        <div className="md:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost text-white">
              ☰
            </label>
            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-black rounded-box w-40">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              {/* <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#foooter">Contact us</a>
              </li>
              <li>
                <a href="#testimonials">Our Testimonials</a>
              </li> */}
              <li>
                <StyledButtonWrapper>
                  <Button />
                </StyledButtonWrapper>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
