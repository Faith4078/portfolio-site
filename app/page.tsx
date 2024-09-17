import Grid from '@/components/home/Grid';
import Hero from '@/components/home/Hero';
import { FloatingNav } from '@/components/ui/FloatingNav';
import Image from 'next/image';
import { FaHome } from 'react-icons/fa';

import React from 'react';
import RecentProjects from '@/components/home/RecentProjects';
import { navItems } from '@/data';
import Experience from '@/components/home/Experience';
import Approach from '@/components/home/Approach';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
