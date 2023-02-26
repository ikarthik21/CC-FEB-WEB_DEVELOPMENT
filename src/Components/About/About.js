import React from 'react';
import styled from "styled-components";
import "../../App.css";

import Particles from '../Home/Particles';


const About = () => {
    return (
        <>
            <Container>
                <Introduction>

                    <h1>Who am  <span className='speColText'>  I ?  </span> </h1>


                    <IntroDetails>
                        <Details>
                            <p>Hi <span className='wavy-image'> 👋🏻</span>   ! </p>

                            <p> I'm  <span className='speColText'>Karthikeya Kallapu </span>from Hyderbad, India. I`m currently pursuing my under graduation from CMR College of Engineering and Technology.</p>

                        </Details>
                        <img src="/images/work_icon.svg" alt="" />

                    </IntroDetails>


                </Introduction>


                <h1 className='CenterItem'>Professional <span className='speColText'> Skills </span></h1>

                <SillSets>


                    <ProfSkills>

                        <ListItem>
                            <img src="/images/c.png" alt="" />
                        </ListItem>

                        <ListItem>
                            <img src="/images/cpp.png" alt="" />
                        </ListItem>

                        <ListItem>
                            <img src="/images/html.png" alt="" />
                        </ListItem>

                        <ListItem>
                            <img src="/images/css.png" alt="" />
                        </ListItem>
                        <ListItem>
                            <img src="/images/js.png" alt="" />
                        </ListItem>

                        <ListItem>
                            <img src="/images/react.png" alt="" />
                        </ListItem>

                        <ProfSkills>

                            <ListItem>
                                <img src="/images/node-js.png" alt="" />
                            </ListItem>

                            <ListItem>
                                <img src="/images/express.png" alt="" />
                            </ListItem>

                            <ListItem>
                                <img src="/images/mongo.png" alt="" />
                            </ListItem>

                            <ListItem>
                                <img src="/images/git.png" alt="" />
                            </ListItem>

                        </ProfSkills>


                    </ProfSkills>

                </SillSets>
                <h1 className='CenterItem'> <span className='speColText'> Tools </span>  I use</h1>

                <SillSets style={{ marginTop: "20px" }}>

                    <ListItem>
                        <img src="/images/postman.png" alt="" />
                    </ListItem>

                    <ListItem>
                        <img src="/images/vscode.png" alt="" />
                    </ListItem>
                    <ListItem>
                        <img src="/images/ij.png" alt="" />
                    </ListItem>
                    <ListItem>
                        <img src="/images/JSBIN.png " alt="" />
                    </ListItem>

                </SillSets>



            </Container>
            

            <Particles />
        </>
    )
}

const Container = styled.div`
h2{
    display : flex;
    align-items :center;
    justify-content: center;
    
}

h1{
    font-family: 'Anton', sans-serif;
    letter-spacing: 1.5px;
}
 span{
    margin-right : 10px;
 }
margin-bottom:100px;

 
`

const SillSets = styled.div`
 
display :flex;
align-items :center;
justify-content:center;
@media(250px <= width  <= 1200px) {
  flex-direction: column;
 
}



`


const ProfSkills = styled.div`
display:flex;
padding : 10px 20px;
flex-wrap : wrap;
display :flex;
align-items :center;
justify-content:center;
margin : 30px 10px;
 

`


const ListItem = styled.div`

box-shadow: 1px 0px 20px 2px rgba(103,192,187,0.76);
-webkit-box-shadow: 1px 0px 20px 1px rgba(103,192,187,0.76);
-moz-box-shadow: 1px 0px 20px 0px rgba(103,192,187,0.76);
transition: transform  0.8s;
border-radius : 8px;
display:flex;
img{
    height: 5rem;
    width: 5rem;
}
padding : 30px 80px;
margin : 10px 15px;

&:hover{
    transform:scale(1.08,1.15);
   }

cursor: pointer;





`



const Introduction = styled.div`

  margin :  20px 20px;
  padding: 50px 20px;
 
 
h1{
    display :flex;
  align-items :center;
  justify-content:center;
  font-family: 'Anton', sans-serif;
}


img{
    height : 50vh;
    width: 45vw;

  }
@media(250px <= width  <= 1200px) {
    padding: 50px 0px;
  

}

  

`


const IntroDetails = styled.div`

font-size: 1.15rem;

 
margin :10px 10px;
padding : 1.8rem 10px;
display :flex;
justify-content:center;

align-items : center;
img{ 
}

@media(250px <= width  <= 1200px) {
  flex-direction: column-reverse;
 
}
`



const Details = styled.div`
padding: 10px 10px;
line-height: 1.95rem; 
 
 text-align: justify;

 max-width : 35rem;
 p{
    font-family: 'Poppins', sans-serif;
    font-size: 1.35rem;
    font-weight: 1.35rem;
 
}

span{
    font-family: 'Shantell Sans', cursive;
    font-weight: bold;
}


`


export default About;
