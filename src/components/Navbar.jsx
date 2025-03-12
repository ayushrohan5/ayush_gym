import React from "react";
import Button from "./Button";
import styled from "styled-components";

const Navbar = () => {
  const StyledButtonWrapper = styled.div`
  .Btn {
    width: 120px !important;
  }
`;
  return (
    
    <>
      <nav className="fixed top-0 left-0 w-full bg-black text-white p-4 z-50 gap-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-lg font-bold">
              <img
                className="w-[185px] h-[40px]"
                src="/logo.PNG"
                alt="Company Logo"
              />
            </span>
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="/item2" className="text-white hover:text-gray-400">
              About us
            </a>
            <a href="/item3" className="text-white hover:text-gray-400">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Contact us
            </a>
          </div>

          <div className="hidden md:block">
            <Button />
          </div>

          <div className="md:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost text-white">
                ☰
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-black rounded-box w-40"
              >
                <li>
                  <a href="/item1">Home</a>
                </li>
                <li>
                  <a href="/item2">About us</a>
                </li>
                <li>
                  <a href="/item3">Services</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
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
    </>
  );
};

export default Navbar;
