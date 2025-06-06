import { projects } from '@/data';
import React from 'react';
import { PinContainer } from '../ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa6';
import Image from 'next/image';

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of {''}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ title, id, des, iconLists, img, link }) => (
          <div
            key={id}
            className="sm:h-[41ren] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[570px] w-[90vw]"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex  items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-10">
                <div>
                  <Image
                    src={'/bg.png'}
                    alt={'bg-img'}
                    width={570}
                    height={570}
                    className="w-full h-full"
                  />
                </div>
                <Image
                  src={img}
                  alt={title}
                  width={570}
                  height={570}
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:size-10 lg:h-10 size-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        className="p-2 "
                        width={30}
                        height={30}
                      />
                    </div>
                  ))}
                </div>
                <a
                  href={link}
                  target="_blank"
                  className="flex justify-center items-center"
                >
                  <p className="flex  lg:text-xs md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
