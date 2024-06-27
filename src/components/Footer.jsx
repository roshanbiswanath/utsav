import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-5">
      <nav className="flex flex-col md:flex-row items-center justify-between mx-5">
        <div className="flex flex-col md:flex-row items-center gap-x-4">
          <img src="logo-black.png" alt="foot_logo" className="md:h-1/12 h-12 mb-5 md:mb-0" />
          <div className='mb-5 md:mb-0'>
            <p className="md:text-left font-bold">Utsav VR</p>
            <p className="font-mono md:text-left">Copyright © 2024 - All rights reserved</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <a href="https://www.facebook.com/profile.php?id=61561217742330" target="_blank" rel="noopener noreferrer">
            <img src="fb.svg" alt="Facebook" className="h-8 md:h-10" />
          </a>
          <a href="https://x.com/utsav_vr" target="_blank" rel="noopener noreferrer">
            <img src="x.jpg" alt="Twitter" className="h-6 md:h-7 rounded-lg" />
          </a>
          <a href="https://www.instagram.com/utsav.vr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <img src="insta.svg" alt="Instagram" className="h-6 md:h-7" />
          </a>
          <a href="https://www.linkedin.com/showcase/utsavvr/" target="_blank" rel="noopener noreferrer">
            <img src="in.svg" alt="LinkedIn" className="h-8 md:h-10" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
