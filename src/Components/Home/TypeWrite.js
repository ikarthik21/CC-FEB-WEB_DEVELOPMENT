import React from 'react';
import Typewriter from "typewriter-effect";
import styled from 'styled-components';

const TypeWrite = () => {
    return (
        <Writter>
            <Typewriter
                options={{
                    strings: [
                        "Full Stack Developer",
                        "Cyber Security Enthusiast",
                        "MERN Stack Developer",
                      
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
            />
        </Writter>
    );
}

const Writter = styled.div`
  margin: 20px 0px;
  .Typewriter__cursor {
    color: #67C0BB;
  }

  .Typewriter__wrapper {
   
  font-size:22px;
  font-weight: bold;
  color: #67C0BB ;
  font-family: 'Poppins', sans-serif;
  @media(250px <= width  <= 1200px) {
    font-size:  15px;
 
  }

  }


  





`;

export default TypeWrite;
