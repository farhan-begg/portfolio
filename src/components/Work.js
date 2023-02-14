import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';
import { BiClipboard, BiHomeAlt, BiUser } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

const Work = () => {
  return (
    <section className="section min-h-[85vh] lg:max-h-[90vh]" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                Some of my current work, I am currently focusing on mastering state management in React, and learning state management libraries such as Redux

              </p>
              <a href="https://github.com/farhan-begg">
                <button className="btn btn-sm">View all Projects</button>

              </a>
            </div>

            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-[1px]">
              {/* overlau */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* prettitles */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient ">Full Stack</span>
              </div>
              {/* titles */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 flex gap-x-[10px]  ">
                <span className="text-3x1 text-white flex text-[20px] gap[20px]">
                  Admin Tracker
                </span>
                <button>
                  <a
                    href="              https://admin-tracker.onrender.com/dashboard
"
                    className="text-gradient"
                  >
                    Live
                  </a>
                </button>
                <a
                  style={{ position: 'relative', bottom: -5 }}
                  href="https://github.com/farhan-begg/admin-dashboard"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-1px]">
              {/* overlau */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* prettitles */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">My Life</span>
              </div>
              {/* titles */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 flex gap-x-[10px]  ">
                <span className="text-3x1 text-white flex text-[20px] gap[20px]">
                  My Life
                </span>

                <button>
                  <a
                    href="              https://my-life-eba96.web.app/"
                    className="text-gradient"
                  >
                    Live
                  </a>
                </button>

                <a
                  style={{ position: 'relative', bottom: -5 }}
                  href="https://github.com/farhan-begg/mylife"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-1px]">
              {/* overlau */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all  w-full h-full duration-500"
                src={Img3}
                alt=""
              />
              {/* prettitles */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* titles */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 flex gap-x-[10px]  ">
                <span className="text-3x1 text-white flex text-[20px] gap[20px]">
                  Trilliant
                </span>

                <button>
                  <a
                    href="https://trilliant-5ed97.web.app/catalog"
                    className="text-gradient"
                  >
                    Live
                  </a>
                </button>
                <a
                  style={{ position: 'relative', bottom: -5 }}
                  href="https://github.com/MakeMeSenpai/trilliant-trillionaires"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
