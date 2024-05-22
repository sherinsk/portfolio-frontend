import React from 'react';
import styled from 'styled-components';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);


        formData.append("access_key", "422a0498-898f-4912-813f-ed36aaf872cf");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            alert("Form submitted successfully!. Please Check tha mail");
        } else {
            console.error("Error:", res.message);
            alert("Error:" + res.message);
        }
    };

    return (
        <>
            <ContactMain>
                <h1>Contact</h1>
                <ContactSection>
                    <ContactLeft>
                        <h5>Let's <span style={{ color: "white" }}>talk</span></h5>
                        <p>Thank you for visiting my portfolio! I would love to hear from you, whether you have a project you want to discuss, feedback on my work, or just want to say hello. Here’s how you can reach me</p>
                        <ContactList className='mail'>
                            <MdEmail className='icons' />
                            <h6>krishnpriyasanthosh2005@gmail.com</h6>
                        </ContactList>
                        <ContactList>
                            <IoCall className='icons' />
                            <h6>+ 78433 1233 679</h6>
                        </ContactList>
                        <ContactList>
                            <FaLocationDot className='icons' />
                            <h6>Edappally, Kochi</h6>
                        </ContactList>
                    </ContactLeft>
                    <ContactRight>
                        <form onSubmit={onSubmit}>
                            <label className='label'>Name</label><br />
                            <input name='userName' type='text' placeholder='Enter your name' /><br />
                            <label className='label'>Email</label><br />
                            <input name='email' type='email' placeholder='Enter the email' /><br />
                            <label className='label'>Write Your message here</label><br />
                            <textarea name='message' rows="8" placeholder='Enter your message'></textarea>
                            <Button type="submit" >Submit</Button>
                        </form>
                    </ContactRight>
                </ContactSection>
            </ContactMain>

        </>

    );
}

export default Contact;

// Styled components
const ContactMain = styled.div`
  color: #D8D8D8;
  padding: 2rem;
  margin: 2rem 8rem ;
  margin-bottom: 0px;
  

  h1 {
    font-size: 3rem;
    text-align: center;
    font-weight: 500;
  }
  
@media(max-width:1024px){
  margin:0 4rem;
 
}
@media(max-width:640px){
  margin:0 2rem ;
  padding:0;
  
}
@media(max-width:460px){
  margin-bottom: 0px;
  padding:0;
  margin:0 2rem ;

}
`;

const ContactSection = styled.div`
  display: flex;
  gap: 130px;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 75px;

  @media(max-width:1257px){
    gap: 80px;
    flex-direction: column;
    margin-top: 169px;
   
 
  }
`;

const ContactLeft = styled.div`
margin-top: -100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
@media(max-width:460px){
 max-width:100%;       
}
  h5 {
    font-size: 3rem;
    color: #f59e0b;
    font-weight: 600;
    @media(max-width:1257px){
      font-size: 2.4rem;
      display: none;
    }
    

  p {
    font-size: 1.2rem;
    margin: 20px 0;
    @media(max-width:460px){
      text-align: justify;
    }
  }
  .mail{
    display:none;
  }
`;

const ContactList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 1rem 0;

  .icons {
    font-size: 1.6rem;
  }

  h6 {
    font-size: 1.2rem;
  }
`;

const ContactRight = styled.div`
  box-shadow: 0 0 30px #f59e0b;
  border-radius: 2rem;
  padding-bottom: 2rem;
  

  form {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  .label {
    color: #D8D8D8;
    font-size: 18px;
    font-weight: 500;
  }

  input,
  textarea {
    border: none;
    width: 400px;
    height: 50px;
    border-radius: 4px;
    padding-left: 20px;
    background: #32323c;
    margin-bottom: 10px;
    @media(max-width:640px){
      width: 330px;
    }
    @media(max-width:460px){
      width: 217px;
      height: 32px;

    }
  }
  textarea {
    height: 130px;
    @media(max-width:460px){
      height: 65px;
    }
  
  }
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: #f59e0b;
  border: none;
  border-radius: 4rem;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  @media(max-width:460px){
    width: 93px;
  height: 36px;
  margin-top: 10px;
  }
  


  &:hover {
    background-color: #d18f00;
  }
`;
