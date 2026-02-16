import * as React from 'react';
import Icon from '@/components/Icon';

export default function Profile() {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row mt-6">
        <div className="flex gap-3 pb-4">
          <img className="w-20 md:w-25" src="/undraw_male_avatar_g98d.svg"></img>
          <div>
            <h1 className="text-4xl">David Waite</h1>
            <h2 className="text-2xl">Software Engineer</h2>
          </div>
        </div>
        <div className="flex flex-grow md:justify-end md:w-fit pb-5">
          <Icon imageHref="github.svg" link="https://github.com/d-waite/" />
          <Icon imageHref="linkedin.svg" link="https://www.linkedin.com/in/dgwcsm/" />
          <Icon imageHref="file-text.svg" link="DGW_Resume 2026.pdf" />
        </div>
      </div>
      <h1 className="text-4xl pb-3">About Me</h1>
      <p className="text-lg p-2">
        I am a software engineer specializing in full-stack web development. A 2023 Summa Cum Laude graduate from Colorado School of Mines, I have professional experience building and improving software systems. At KE Andrews, I worked on in-house software where I developed new systems from the ground up, implemented key enhancements, delivered critical bug fixes and support, and managed project tickets throughout the development lifecycle. I combine technical expertise with strong project management skills to deliver quality solutions.
      </p>
    </div>
  );
};