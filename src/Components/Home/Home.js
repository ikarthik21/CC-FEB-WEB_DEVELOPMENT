import React from 'react'
import styled from 'styled-components';
import Particles from './Particles';
import TypeWrite from './TypeWrite';
import "../../App.css";

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

 
const Home = () => {
  return (
    <div  >

      <ContentBox className='ApplyBack'>

        <ContentWrapper>
    
        <DetailsBox>
          <h1 className='centerItems'>Hi  <span className='wavy-image'> 👋🏻</span>  </h1>
          <DetailContent>

          <h1> I'm  <span >    Karthikeya Kallapu</span> </h1>

            <TypeWrite />

          </DetailContent>

          <SocialLinks>


            <SocialItem > 
              <a href="https://github.com/ikarthik21" rel="noreferrer" target={'_blank'}>
                <AiFillGithub size={40} />

              </a>
            </SocialItem>

            <SocialItem >
              <a href="https://www.linkedin.com/in/karthikeyakallapu/" rel="noreferrer" target={'_blank'}>
                <AiFillLinkedin size={40} />

              </a>
            </SocialItem>
            <SocialItem >
              <a href="mailto:karthikeyakallapu@gmail.com" rel="noreferrer" target={'_blank'}>
                <AiOutlineMail size={40} />

              </a>
            </SocialItem>


          </SocialLinks>

        </DetailsBox>
        <ImageBox>
          <img src="/images/DeveloperLogo.svg" alt="" />

        </ImageBox>
      
        </ContentWrapper>
      </ContentBox>
      <Particles />


      
    </div>
  )
}


const ContentBox = styled.div`
   display:flex;
 
   min-height : 100vh;

   z-index :0;
  justify-content:center;
   align-items :center;
    


`

const ContentWrapper=styled.div`
display:flex;
 
@media(250px <= width  <= 1200px) {
 flex-direction :column-reverse;

}



`
const DetailsBox = styled.div`

    display:flex;
  flex-direction :column;
  justify-content:center;
 
   padding : 10px 20px;
   min-width : 400px;
   @media(250px <= width  <= 1200px) {
    min-width :  280px;
    min-height : 400px;
   font-size: 0.70rem;    padding : 0px 15px;
   margin: 0px 25px;
 
}


`

const DetailContent = styled.div`
span{
  font-family: 'Shantell Sans', cursive;
  color: #67C0BB;
  font-size: 25px;
  font-weight : bolder;
  letter-spacing : 2px;
 
}





`
const ImageBox = styled.div`
display:flex;
justify-content:center;
align-items :center;
 

  img{
    height : 400px;

  }
  @media(250px <= width  <= 1200px ) {
    min-width :  250px;
    img{
      height : 350px;
    
  
    }
  
 }
 

`


const SocialLinks = styled.div`
 display :flex;
 align-items :center;

`
const SocialItem = styled.div`
   cursor: pointer;
 
   margin-right: 10px;
   border-radius: 60px;
   padding: 3px 3px;
     &:hover{
      background-color: white;
   }

   a{ 
    color:white;
   &:hover{
    color: #67C0BB;
  }

 }


`
export default Home