import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import "./ContactUs.css";
import { Box, Button, Card, TextField, Typography } from "@material-ui/core";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hb42cuy', 'template_btao74r', form.current, 'Pe05Ot0r9AEJLDk53')
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log(error.text);    
      alert('Failed to send message. Please try again later.');
    });
    e.target.reset(); 
  };

  return (
    <Box className="contact-box">
      <Box className="contact-txtbox">
        <Box className="tit-box">
          <Typography variant="h3" className="contact-title">ContactUs</Typography>
        </Box>
        <Box className="para-box">
          <Typography variant="p" className="contact-para">Get in touch with our creator-friendly support team. Our business hours are 09.30-06.30 ET Monday-Friday and 09AM-05PM ET on weekends.</Typography>
        </Box>
      </Box>
      <Box className="form-box">
        <Card className="contact-card" elevation={7}>
          <form ref={form} onSubmit={sendEmail}>
            <Box className="text-box">
              <TextField className="text-field" type="text" placeholder="Enter Your Name" name="user_name" required />
            </Box>
            <Box className="text-box">
              <TextField className="text-field" type="mob_no" placeholder="Enter Your Mobile" name="user_mobile" required />
            </Box>
            <Box className="text-box">
              <TextField className="text-field" type="email" placeholder="Enter Your Email" name="user_email" required />
            </Box>
            <Box className="message-box">
              <TextField className="message-field" rows={3} id="outlined-textarea" multiline name="message" placeholder="Enter Your Text Message" required/>
            </Box>
            <Box className="btn-field">
              <Button className="submit-btn" type="submit" value="Send" variant="contained" >Submit</Button>
            </Box>
          </form>
        </Card>
      </Box>
    </Box>
  );
};

export default ContactUs;
