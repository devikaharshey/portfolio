import { profiles } from '@/data';
import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip';

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col mb-10 mx-10 items-center justify-center gap-y-20 md:flex-col">
        <h1 className="heading justify-center">Let's <span className="text-purple">Connect</span></h1>

        <div className="flex items-center justify-center md:gap-5 gap-5">
          <AnimatedTooltip items={profiles} />
        </div>

        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Devika Harshey
        </p>
      </div>
    </footer>
  );
}

export default Footer
