import React from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
                  </div>
                  <ul>
                      <li className='mid'><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, voluptatum.</p></li><br />
                      <li className='mid'><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, voluptatum.</p></li><br />
                      <li className='mid'><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, voluptatum.</p></li><br />
                      <li className='mid'><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, voluptatum.</p></li><br />
                   </ul>
                    <Link to={"/"}>
              Home{" "}
              <span>
                <HiOutlineArrowLeft />
              </span>
            </Link>
              </div>
        
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
          
          </div>
          
      </section>
  )
}

export default About