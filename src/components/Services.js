import React from 'react';

import { fadeIn } from '../variants'
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion'
import resume from '../../src/assets/FarhanBegg.pdf'


const services = [
  {
    name: "Onward Medical",
    description: " Built a React web app for over 200+ employees to efficiently assign and dispatch drivers to health care patients, demonstrating expertise in frontend development and the ability to deliver solutions that meet the needs of large-scale user base",
    link: 'Learn more'
  },
  {
    name: "FirstGen",
    description: "Collaborated with backend and solidity developers to build a NFT Minting website using React, Deployed application using Firebase and was successfully able to Mint $6,000 worth of NFT’s ",
    link: 'Learn more'
  },
  {
    name: "Scrimmage",
    description: "Utilized React Native to develop a UI for a mobile app that facilitates users to place bets on sports teams seamlessly",
    link: 'Learn more'
  },
  {
    name: "Trilliant",
    description: " Lead a team of 4 developers to build a product review app using React, Firebase, and Material UI, showcasing strong leadership and collaboration skills while utilizing technical expertise in software  development.",
    link: 'Learn more '
  }
]
const Services = () => {
  return <section className="section" id="services">
    <div className='container mx-auto'>
      <div className="flex flex-col lg:flex-row">
        <motion.div

          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}


          className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
          <h2 className="h2 text-accent mb-6">What I've Done</h2>
          <h3 className="h3 max-w-[455px] mb-16">Software Journey </h3>



          <a href={resume} download="FarhanBeggResume.pdf">          <button className=' btn btn-sm'>Download Resume         </button></a>




        </motion.div>
        <motion.div variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }} className="flex-1">
          <div>
            {services.map((service, index) => {
              // destructure service 
              const { name, description, link } = service;
              return (
                <div className='border-b border-white/20 h-[167px] mb-[38px]' key={index}>
                  <div className='max-w-[576px]'>
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                    <p className="font-secondary leading-tight">{description}</p>
                  </div>

                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>



  </section>;
};

export default Services;
