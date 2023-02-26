import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import Particles from '../Home/Particles';

 
const Contact = () => {
  const form = useRef();

 
  const sendEmail = (e) => {
    e.preventDefault();
    const formInputs = e.target.querySelectorAll('.fillFields, textarea');
    console.log(formInputs);
    for (let input of formInputs) {
      if (!input.value) {
        alert('Please fill all fields!');
        return;
      }
    }

    emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <>


      <Container>


        <FormBox>


        <h1 style={{textAlign:"center"}}>Contact  <span className='speColText'>  Me  </span> </h1>

          <form ref={form} onSubmit={sendEmail}>


            <FormItem>
              <input type="text" className='fillFields' placeholder='First Name' name="firstName" />
              <input type="text" className='fillFields' placeholder='Last Name' name="lastName" />
            </FormItem>

            <FormItem>
              <input type="text" className='fillFields' placeholder='Mobile' name="mobile" />
              <input type="text" className='fillFields' placeholder='Email' name="mail" />
            </FormItem>

            <FormItem>

              <textarea id="" cols="30" rows="7" name="message" placeholder='Enter your message here....' draggable="false"></textarea>

            </FormItem>
            <FormItem>

              <input type="submit" name="" id="" />
            </FormItem>


          </form>

        </FormBox>


      </Container>
      <Particles />


    </>
  )
}


const Container = styled.div`
 
 
margin : auto 80px;
 
border-radius : 10px;

@media(250px <= width  <= 1200px) {
  flex-direction:column;
  
    
margin : auto 20px;
  padding : 0px 0px;

}


 

`

const FormBox = styled.div`
 
padding : 100px 100px;
  
`

const FormItem = styled.div`
 
 padding : 10px 10px; 
 display:flex;
 align-items :center;
 justify-content:center;

 textarea{
    background-color: transparent;
    color:white;
    outline:none;
    font-family: 'Poppins', sans-serif;
    margin-top:10px;
    width:  28vw;  
    transition : transform  0.8s;
    border : 2px solid #67C0BB;
    resize: none;
    font-size: 1.03rem;
     border-radius: 6px;
     padding: 10px 10px;
    &::placeholder{
     font-size: 18px;       
    }

    &:focus::placeholder {
        color:white;
      }
    
    &:focus{
        transform : scale(1.12,1.09);
        border-bottom : 3px solid #67C0BB;     
    }
 }

 input{
    font-family: 'Poppins', sans-serif;
     background-color: transparent;
     outline :none;
     color :white;
     border-radius: 5px;
     border: none;
     border-bottom : 2px solid #67C0BB;
     margin  : 10px  25px;
     height : 1.5rem;
     width :  16rem;
     font-size: 1.02rem;
      height : 2rem;
        transition : transform  0.8s;
 
           &:focus{
            transform : scale(1.12,1.09);
                 border-bottom : 3px solid #67C0BB;

           }
           &:focus::placeholder {
            margin-top: 10px;
            color: white;
            font-size: 1.03rem;
          }
          
    }


    input[type="submit"] {
         border: 3px solid #67C0BB;
         transition : transform  0.8s;
         cursor:pointer;
         font-family:monospace;
         font-weight:bold;

            height : 3rem;
             width : 7rem;
        
               &:hover{
                 transform : scale(1.09,1.09);
                 background-color:white;
                 color : #67C0BB;
               }

          
      }

      @media(250px <= width  <= 1200px) {
      flex-direction:column;
      
            textarea{
              width:  65vw;  
            }
             
      padding : 0px 0px;
    
    }






`



export default Contact