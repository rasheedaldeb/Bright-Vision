import React from 'react'
import './Clients.css'
import { clientsImgs } from "./../../Img/Img";

const Clients = () => {
  return (
    <section className="clients container-section">
        <h2 className="hero-title text-5xl text-primary font-bold">
            Our <span className="text-secondaryDark">Clients</span> 
        </h2>
        <div className="clients-content flex">
           <div className='clients-description'>
              <p className="text-xl leading-10 text-secondary">
                    Vision Group has been established since 1995
                    It is specialized in security devices, surveillance
                    cameras, anti-theft devices, networks and software.
                    It keeps pace with the latest technologies and our
                    successes have continued to expand globally.
                </p>
                <br />
                <p className="text-xl leading-10 text-secondary">
                    Vision Group has been established since 1995
                    It is specialized in security devices, surveillance
                    cameras, anti-theft devices, networks and software.
                    It keeps pace with the latest technologies and our
                    successes have continued to expand globally.
                </p>
           </div>
           <div className='clients-photo flex'>
              <img src={clientsImgs.Archirodon} /> 
              <img src={clientsImgs.Cepco} />
              <img src={clientsImgs.El_Seif} /> 
              <img src={clientsImgs.Neom} /> 
              <img src={clientsImgs.The_red_sea} />
           </div>
         </div>  
    </section>
  )
}

export default Clients
