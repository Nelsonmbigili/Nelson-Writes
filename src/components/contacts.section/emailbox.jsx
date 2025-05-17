import {
  EmailBoxContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  SubmitButton,
  CustomAlert,
  ImageLink,
  Container
} from './emailbox-styles';
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import emailIcon from "../../assets/email.svg"; 

const EmailBox = () => {
    const [alertMessage, setAlertMessage] = useState('Status: Not yet sent!');
    const [alertType, setAlertType] = useState('pending'); 
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6zvbm1e', 'template_l3blw5q', form.current, {
        publicKey: 'Al-fEaDCyrRUN7447',
      })
      
      .then(
        () => {
            setAlertMessage('Status: Sent successfully! ✅');
            setAlertType('success');
            console.log(form.current['email'].value)
            emailjs
            .send('YOUR_SERVICE_ID', 'template_g641hs9', {
              email: form.current['email'].value
            })
            .then(
              () => {
                console.log('Auto-response sent successfully!');
              },
              (error) => {
                console.error('Auto-response failed...', error.text);
              }
            );
        },
        (error) => {
            setAlertMessage('Status: Failled, Please try again. ❌');
            setAlertType('error');
        }
      )
      .then(form.current.reset())
      ;
  };

  return (
    <EmailBoxContainer>
      <Container>
        <ImageLink src={emailIcon} alt="email" />
        mbigilinelson@gmail.com
      </Container>
      {alertMessage && (
        <CustomAlert>
            {alertMessage}
        </CustomAlert>
        )}
      <StyledForm ref={form} onSubmit={sendEmail}>
      
          <StyledLabel>Name</StyledLabel>
          <StyledInput name="name" type="text" required placeholder="What's your name?" />
        
          <StyledLabel>Email</StyledLabel>
          <StyledInput name="email" type="email" required placeholder="What's your email?" />
        
          <StyledLabel>Message</StyledLabel>
          <StyledTextarea name="message" required placeholder="Your message goes here..." />
      
        <SubmitButton type="submit">Send Message</SubmitButton>
      </StyledForm>
    </EmailBoxContainer>
  );
};

export default EmailBox;
