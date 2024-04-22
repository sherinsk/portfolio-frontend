import React from 'react'
import styled from 'styled-components';
import { IoCall } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  
  return (
    <>
    <ContactMain>
      <h1>Contact </h1>
      <ContactSection>
        <ContactLeft>
        <h5>Let's talk</h5>
        <ContactList>
          <MdEmail/>
          <p>krishnpriyasanthosh2005@gmail.com</p>
        </ContactList>
        <ContactList>
          <IoCall/>
          <p>+ 78433 1233 679</p>
        </ContactList>
        <ContactList>
          <FaLocationDot/>
          <p>Edappally,Kochi</p>
        </ContactList>
        </ContactLeft>
        <ContactRight>
      <form>
        
      </form>
        </ContactRight>
      </ContactSection>
    </ContactMain>
      
    </>
  )
}

export default Contact

const ContactMain = styled.div`
color:white;

padding: 2rem;
margin: 2rem 8rem 0;
gap:20px;
h1{
  text-align: center;
  font-size: 2.2rem;
 }
`;
const ContactSection = styled.div`
display: flex;
`;
const ContactLeft = styled.div`

h6{
  ont-size: 1.3rem;
}

`;
const ContactList = styled.div`
display: flex;

align-items: baseline;
gap: 10px;`;
const ContactRight = styled.div``;