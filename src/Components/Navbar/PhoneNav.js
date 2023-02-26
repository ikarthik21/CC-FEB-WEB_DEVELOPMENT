import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Resume from './Resume.pdf'

import { AiFillHome, AiOutlineContacts } from 'react-icons/ai';
import { SiAboutdotme } from 'react-icons/si';
import { FcWorkflow } from 'react-icons/fc';
 
import { CgNotes } from 'react-icons/cg';

const PhoneNav = () => {
    return (
        <>
            <BottomNav>


                <NavBox>


                    <Link to="/home" >
                        <NavItem>
                            <AiFillHome size={35} />
                        </NavItem>
                    </Link>


                    <Link to="/about" >
                        <NavItem>
                            <SiAboutdotme size={35} />
                        </NavItem>
                    </Link>


                    <Link to="/projects" >
                        <NavItem>
                            <FcWorkflow size={35} />
                        </NavItem>

                    </Link>


                    <Link to="/contact" >
                        <NavItem>
                            <AiOutlineContacts size={35} />
                        </NavItem>
                    </Link>
                    <a href={Resume} download={Resume} >
                        <NavItem>
                            <CgNotes size={35} />
                        </NavItem>

                    </a>

                </NavBox>
            </BottomNav>
        </>
    )
}



const BottomNav = styled.div`
position: fixed;
left: 0;
bottom: 0;
width: 100%;
background-color: #F9F9F9; 
padding: 5px;
box-sizing: border-box;
z-index: 2;
display:flex;
align-items :center; 
border-radius:7px;


`

const NavBox = styled.div`
 
 display:flex;
 align-items :center;
 justify-content :space-evenly;
 min-width:100vw;

`



const NavItem = styled.div`
 
padding:10px 10px;
color: #67C0BB;
 display:flex;
 align-items:center;
 justify-content:center;




`
export default PhoneNav