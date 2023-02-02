import React from 'react';
import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}

            className="flex-1 bg-about bg-contain bg-no-repeat h-[440px] mix-blend-lighten bg-top"></motion.div>
          <motion.div

            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1">
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4s">
              Frontend Developer
            </h3>
            <p className='mb-6'>
              I am a front-end developer with 2+ years of industry experience and a passion for design. With expertise in React development and a strong eye for design, I have a proven track record of delivering high-quality, visually appealing websites and web applications. I am a self-starter with strong collaboration skills, who excels in meeting project deadlines and exceeding expectations. I am constantly seeking new opportunities to learn and grow in my field and eager to bring my skills to new and challenging projects.
            </p>
            {/* {stats} */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {
                    inView ?
                      <CountUp start={0} end={6} duration={3} /> : null
                  }
                  years+

                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Total Software <br />
                  Development Experience{' '}
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {
                    inView ?
                      <CountUp start={0} end={2} duration={3} /> : null
                  }
                  years+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Total Industry <br />
                  Experience{' '}
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {
                    inView ?
                      <CountUp start={0} end={5} duration={3} /> : null
                  }
                  00+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Built{' '}
                </div>
              </div>

            </div>
            <div className="flex gap-x-8 items-center">
              <button className='btn btn-lg'>Contact Me</button>
              <a href='#' className="text-gradient btn-link" >
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
