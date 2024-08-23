import React from 'react'
import './HomeContact.css'
import { Link } from "react-router-dom";

const HomeContact = () => {
  return (
    <section className="homeContact">
      
        <div className="content bg-primary text-secondaryDark flex flex-col">
            <p className="text-light">
                We guarantee for new experience
            </p>
            <h1 className="about-title text-light">
                let's talk to us for more  information
            </h1>
            <Link to='/contact'  className="md:w-[200px]  text-[12px]  bg-secondary rounded text-primary font-bold">
                Contact Us
            </Link>
        </div>
               
    </section>
  )
}

export default HomeContact
