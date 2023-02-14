import React from 'react';

// import image from '../assets/avatar.svg';
import image from '../assets/pngegg.png';
// import image from '../assets/pn2.png';

import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
import resume from '../../src/assets/FarhanBegg.pdf'

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';
const Banner = () => {
  return (
    <sections className="min-h-[75vh] lg:min-h-[85vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              FARHAN <span>BEGG</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="mr-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] ">
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={['Developer', 2000, 'Designer', 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="flex text-[20px] gap-x-6 max-w-max mx-auto mt-10 lg:mx-0">
              <a href="https://github.com/farhan-begg">
                <button className=' btn btn-sm'>Github</button>
              </a>
              <a href={resume} download="FarhanBeggResume.pdf">          <button className=' btn btn-sm'>Download Resume         </button></a>

            </motion.div>
          </div>
          <motion.div variants={fadeIn('left', 0.8)} initial="hidden" whileInView={'show'} className='hidden lg:flex flex-1 max-w-[320px] lg:min-w-[422px] object-fit-cover mx-auto'>
            <img src={image} alt="" />

          </motion.div>

        </div>
      </div>
      <div>
      </div>
    </sections>
  );
};

export default Banner;
