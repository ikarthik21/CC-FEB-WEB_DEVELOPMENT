import React from 'react'
import Particles from './Particles';
import styled from 'styled-components';
import "../../App.css";
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
const Projects = () => {
  return (
    <>
      <Container>

        <ContentBox>

          <h1 className='CenterItem'>Here are  my recent  <span className='speColText'> Projects </span></h1>

          <ProjectsBox>

            <ProjectItem>
              <img src="/images/RestobayImg.png" alt="" />
              <h2> <span id="colorspans">Resto</span>bay</h2>
              <p>Made a real time E-Restaurant website using EJS , CSS , JS, NODE JS , EXPRESS JS ,
                MONGODB which repalces the current system and saves time and money. </p>
              <Linkbox>
                <a href="https://github.com/ikarthik21/Restobay.io" target="_blank" rel="noreferrer"><span> <AiFillGithub size={21} /> <h4>Git </h4>   </span>  </a>
                <a href="https://restobay-kk.onrender.com/" target="_blank" rel="noreferrer">   <span> <AiOutlineLink size={21} /> <h4> Live </h4>  </span>  </a>
              </Linkbox>
            </ProjectItem>

            <ProjectItem>
              <img src="/images/HotstarImg.png" alt="" />
              <h2>  <span id="colorspans"> HotStar</span>     Clone</h2>
              <p>Made a responsive Diney Hotstar clone using React.js, in which I used my own JSON API to fetch movies and Youtube's Data API for trailers.</p>
              <Linkbox>
                <a href="https://github.com/ikarthik21/Hotstar_Clone.io" target="_blank" rel="noreferrer">   <span> <AiFillGithub size={21} /> <h4>Git </h4>   </span>  </a>
                <a href="https://hotstar-clone-kk.onrender.com/" target="_blank" rel="noreferrer">   <span> <AiOutlineLink size={21} /> <h4> Live </h4>  </span>  </a>
              </Linkbox>
            </ProjectItem>


            <ProjectItem>
              <img src="/images/movieAPI.png" alt="" />
              <h2><span id="colorspans">Movie</span>API</h2>
              <p>Made a Open JSON movie API using Express.js which can fetch movie details such as name, year of release, director, duration , cast, Trailer.  </p>
              <Linkbox>
                <a href="https://github.com/ikarthik21/movieAPI" target="_blank" rel="noreferrer">   <span> <AiFillGithub size={21} /> <h4>Git </h4>   </span>  </a>
                <a href="https://movieapi-kk.onrender.com/movies" target="_blank" rel="noreferrer">   <span> <AiOutlineLink size={21} /> <h4> Live </h4>  </span>  </a>
              </Linkbox>
            </ProjectItem>

          </ProjectsBox>

          <ProjectsBox>

            <ProjectItem>
              <img src="/images/MovieBay.png" alt="" />
              <h2>
                <span id="colorspans">Movie</span>bay
              </h2>
              <p>Made a front-end of a simple movie webiste that shows the movie description and redirects to the Movie Page using HTML, CSS, and Javascript. I used Flickity for the sliding Carousel.</p>
              <Linkbox>
                <a href="https://github.com/ikarthik21/Moviebayweb" target="_blank" rel="noreferrer">   <span> <AiFillGithub size={21} /> <h4>Git </h4>   </span>  </a>
                <a href="https://ikarthik21.github.io/Moviebayweb/" rel="noreferrer" target="_blank"  >   <span> <AiOutlineLink size={21} /> <h4> Live </h4>  </span>  </a>
              </Linkbox>
            </ProjectItem>

            <ProjectItem>
              <img src="/images/CalciImg.png" alt="" />
              <h2>Simple  <span id="colorspans">Calculator </span> </h2>
              <p>Made a simple calculator that performs basic arithmetic calculations such as addition, subtraction, multiplication, division  using basic  HTML,  CSS, and Javascript.</p>
              <Linkbox>
                <a href="https://github.com/ikarthik21/Calculator.io" rel="noreferrer" target="_blank"  >   <span> <AiFillGithub size={21} /> <h4>Git </h4>   </span>  </a>
                <a href="https://ikarthik21.github.io/Calculator.io/" rel="noreferrer" target="_blank"  >   <span> <AiOutlineLink size={21} /> <h4> Live </h4>  </span>  </a>
              </Linkbox>
            </ProjectItem>


          </ProjectsBox>


        </ContentBox>


      </Container>
      <Particles />
    </>
  )
}


const Container = styled.section`
   display :flex;
  align-items::center;
  flex-direction :column;
  padding: 100px 100px;
h1{
  font-family: 'Anton', sans-serif;
  letter-spacing : 1.5px;
  font-size :1 .5rem;
  font-size : 2rem;
}

@media(250px <= width  <= 1200px) {
   padding:0px 0px;
   h1{
    margin-top:10px;
    font-size : 20px;
   }
  
 }

 `

const ContentBox = styled.section`
 display :flex;
 align-items::center;
 flex-direction :column;
 margin: 5vh  0px;
 `


const ProjectsBox = styled.div`
 display:flex;
 margin: 30px 0px;
flex-wrap:wrap;
 
 @media(250px <= width  <= 1200px) {
 flex-direction:column;
 
}



 `


const ProjectItem = styled.div`
 
  max-width: 320px;
 display:flex;
 border-radius : 7px;
flex-direction:column;
margin: 10px 25px;
padding: 15px  2rem;
 p{
  font-family: 'Poppins',sans-serif;
   margin: 2rem 0px;
  text-align: justify;
  line-height: 1.5rem;
  min-height : 100px;

 }
 img{
  height:  200px;
 }
 
 align-items: center;

  
 box-shadow: 1px 0px 20px 2px rgba(103,192,187,0.76);
 -webkit-box-shadow: 1px 0px 20px 1px rgba(103,192,187,0.76);
 -moz-box-shadow: 1px 0px 20px 0px rgba(103,192,187,0.76);
 transition: transform  0.8s;

 &:hover{
  transform:scale(1.08,1.15);
 }
 @media(250px <= width  <= 1200px) {
  max-width: 280px;
  margin: 50px auto;
  
 }
 
 
 

 `

const Linkbox = styled.div`
 
 
   display :flex;
   a{
    color: white;
    margin : 1px 5px;
    padding : 13px 20px ;
    border-radius: 7px;
    display :flex;
    align-items:center;
    justify-content:space-around;
    text-decoration : none;
    background-color: #67C0BB; 
    font-family: 'Poppins',sans-serif;
    
   &:hover{
    background-color: white; 
     color: #67C0BB;
   }
   }
   span{
    
   display :flex;
      h4{
        margin-left : 3px;
      }
  
   }





 `
export default Projects