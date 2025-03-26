import React from 'react';
import styled from 'styled-components';

const Button2 = () => {
  const email = "ayushrohan5@gmail.com";

  return (
    <StyledWrapper>
      <a href={`mailto:${email}`} className="Btn z-10">
        Get Started
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .Btn {
    width: 140px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(to right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a);
    background-size: 250%;
    background-position: left;
    color: #ffd277;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 1s;
    overflow: hidden;
    text-decoration: none; /* Remove underline from link */
    text-align: center; /* Center text */
  }

  .Btn::before {
    position: absolute;
    content: "Get Started";
    color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97%;
    height: 90%;
    border-radius: 8px;
    transition-duration: 1s;
    background-color: rgba(0, 0, 0, 0.842);
    background-size: 200%;
    pointer-events: none;
  }

  .Btn:hover {
    background-position: right;
    transition-duration: 1s;
  }

  .Btn:hover::before {
    background-position: right;
    transition-duration: 1s;
  }

  .Btn:active {
    transform: scale(0.95);
  }
`;

export default Button2;