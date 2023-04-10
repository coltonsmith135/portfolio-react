import React from "react";
import profilePicture from '../images/colton.jpg'




export default function About() {
  return (

    <div className="about">
      
        <img className='img-fluid' src={profilePicture} alt='Profile picture'/>
        <div>
        <p>My name is Colton smith. I am a Jr Full-Stack Developer
        Originally from Portland Or, living in Vancouver Wa.
        I have spent a great deal of time learning everything I can to become a Full-Stack Developer to better my career and future.
        As time goes on I want to broaden my knowledge on other languages and create more reactive and better UI applications</p>
        </div>
      </div>
    

   
  );
}