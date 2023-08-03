import React from 'react';
import './Experience.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Experience = () => {
  return (
    <div>
      <h1>Experience</h1>
      {/* <div className='experience-container'> */}
      <Carousel>
        <div className='xp1'>
          Vidoori
          <span>

          </span>
        </div>
        <div className='xp2'>
          Hack Reactor
        </div>
      </Carousel>
      {/* </div> */}
      
      <h1>Projects</h1>
      {/* <div className='projects-container'> */}
      <Carousel>
        <div className='proj1'>
          Project 1
        </div>
        <div className='proj2'>
          Project 2
        </div>
      </Carousel>
      {/* </div> */}
    </div>
  )
}

export default Experience;