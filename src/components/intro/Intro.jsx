import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/Me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>+5 Completed Projects</small>
            </article>
          </div>
          <p>Passionate in Designing Digital World Solutions|Interior Designer with Experience Headed for Full-Stack Development 🖥️ | Excited to Seek Opportunities

👋 Hi there! I'm Hicham Ouartassi, and I find the journey quite inspiring that takes me from the interior design world to a job as full-stack developer. I've accumulated a decade of experience crafting beautiful and functional spaces, and have polished my skills in problem-solving, attention to detail and creativity—qualities I'm now bringing to bear on creating exceptional digital experiences.

🚀 With insatiable curiosity driving my leap though I fervently wish to be at the forefront of innovation, I plunged into an intensive program of self-study and training in which I thoroughly learned languages like JavaScript, HTML/CSS and delved deeply into technological areas such as React, Node.js, and SQL. Both design and technology fuel me--it's this rare prism that allows me to move between aesthetics and function, creating user experiences which are both seamless efficient.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro