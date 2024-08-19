import React from 'react';
import './About.css'; // Assuming you'll create a separate CSS file for styling

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src="/path-to-your-image.jpg" alt="Your Name" className="profile-image" />
        <div className="about-text">
          <p>
            Hello! I'm [Your Name], a [Your Profession] based in [Your Location]. 
            I have [X] years of experience in [Your Field], specializing in [Your Specialties].
          </p>
          <p>
            My passion lies in [describe what you're passionate about in your field]. 
            I'm constantly learning and improving my skills to stay at the forefront of [Your Industry].
          </p>
          <p>
            When I'm not [Your Profession]-ing, you can find me [Your Hobbies or Interests].
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;