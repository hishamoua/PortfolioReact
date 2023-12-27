import React from 'react';
import IMG1 from '../../assets/Vite-React.png';
import IMG2 from '../../assets/The-Cribe-Onepage-min.jpg';
import IMG3 from '../../assets/Horse-Riding-Webflow-Ecommerce-website-template.png';
import IMG4 from '../../assets/LP PORSCHE.jpg';
import IMG5 from '../../assets/MERN-Estate.png';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Roots the Brand',
      img: IMG1,
      description:  'Unique handcrafted leather goods for your everyday life We re Roots the brand and we make honest, high quality, functional products to help you dress better. Our products are designed to reflect our unique perspective and style, making the little things better, and we won t stop until we get it right. We combine incredible craftsmanship, a touch of heart and the finest materials.',
      technologies: 'Reactjs Nodejs',
    },
    {
      id: 2,
      title: 'Porsche landing page',
      img: IMG4,
      description:
        'a page made for an event for Porsche',
      technologies: 'Html / css',
    },
    {
      id: 3,
      title: 'Kribnb',
      img: IMG2,
      description: 'a website for managing short rental houses',
      technologies: 'Reactjs, Nodejs',
    },
    {
      id: 4,
      title: 'Horse riding website',
      img: IMG3,
      description:
        'Fully responsive interactive website built based on Figma design',
      technologies: 'JavaScript | CSS',
    },
    {
      id: 5,
      title: 'Real Estate website',
      img: IMG5,
      description:
        'Fully responsive interactive website built based on Adobe XD design',
      technologies: 'JavaScript | CSS', 
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {/* <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
