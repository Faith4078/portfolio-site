import React from 'react';
import MagicButton from '../ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full  pb-10 mb-[93px]  md:mb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="footer-grid"
          width={1920}
          height={1080}
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading max-w-[750px]">
          Ready to take <span className="text-purple">your</span> digital
          prescence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and lets discuss how I can help you achieve your
          goals
        </p>
        <a href="mailto:fdoyewole52@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Faith Oluwadamilare Oyewole
        </p>
        <div className="mt-5 flex gap-4 items-center  lg:gap-6">
          {socialMedia.map((profile) => {
            const { id, img, link } = profile;
            return (
              <a href={link} target="_blank" key={link}>
                <div
                  key={id}
                  className="size-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-50 bg-black-200 rounded-lg border border-black-300"
                >
                  <Image src={img} alt={img} width={20} height={20} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
