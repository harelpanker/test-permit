'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Certified from './Certified';
import JoinModule from '../JoinModule';
import { Calendar, Check } from 'lucide-react';
import logo from '../../public/images/logo_small.png';
import github from '../../public/images/sm/github.svg';
import slack from '../../public/images/sm/slack.svg';
import youtube from '../../public/images/sm/youtube.svg';
import linkedin from '../../public/images/sm/linkedin.svg';
import twitter from '../../public/images/sm/twitter.svg';

const CALENDLY_URL = 'https://calendly.com/d/44n-hc4-th3';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const now = new Date();
  const year = Math.max(now.getFullYear(), 2022);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const dataLayerHandler = () => {
    let dataLayer = (window as any).dataLayer;
    if (typeof window !== 'undefined') {
      dataLayer = dataLayer || [];
      dataLayer.push({
        event: 'slack_footer',
        path: window.location.href,
      });
    }
  };

  return (
    <footer className='relative z-20 bg-[#FDF3EC] px-5 py-10 lg:px-12 lg:py-16'>
      <div className='container flex flex-col gap-12 border-t border-solid border-slate-400 pt-10'>
        {/* top */}
        <div className='flex flex-col items-center justify-between gap-10 xl:grid xl:grid-cols-3 xl:items-start'>
          {/* top left */}
          <div className='flex flex-col'>
            <div className='flex flex-col gap-8 lg:justify-self-start'>
              <div className='flex flex-col items-center gap-6 lg:flex-row'>
                <Image
                  className='w-auto'
                  src={logo}
                  alt='logo'
                  width={104}
                  height={30}
                />
                <p className='mt-[1px] text-sm'>Fullstack Permissions</p>
              </div>
              <ul className='group flex items-center gap-5'>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://github.com/permitio'
                    className='flex items-center justify-center text-sm font-bold opacity-100 transition duration-500 hover:text-theme_purple'>
                    <Image
                      className='w-auto'
                      src={github}
                      alt='github'
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li>
                  <a
                    onClick={dataLayerHandler}
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://permit-io.slack.com/join/shared_invite/zt-nz6yjgnp-RlP9rtOPwO0n0aH_vLbmBQ#/shared-invite/email'
                    className='slack_footer flex items-center justify-center text-sm font-bold opacity-100 transition duration-500 hover:text-theme_purple'>
                    <Image
                      className='pointer-events-none w-auto'
                      src={slack}
                      alt='slack'
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://twitter.com/permit_io'
                    className='flex items-center justify-center text-sm font-bold opacity-100 transition duration-500 hover:text-theme_purple'>
                    <Image
                      className='w-auto'
                      src={twitter}
                      alt='twitter'
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.youtube.com/channel/UCWUHX5q_fFPBhrJF_J-NTbg'
                    className='flex items-center justify-center text-sm font-bold opacity-100 transition duration-500 hover:text-theme_purple'>
                    <Image
                      className='w-auto'
                      src={youtube}
                      alt='youtube'
                      width={26}
                      height={26}
                    />
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.linkedin.com/company/permitio/'
                    className='flex items-center justify-center text-sm font-bold opacity-100 transition duration-500 hover:text-theme_purple'>
                    <Image
                      className='w-auto'
                      src={linkedin}
                      alt='linkedin'
                      width={20}
                      height={20}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* top center */}
          <div className='flex flex-col gap-10 text-center lg:flex-row lg:justify-self-center lg:text-left 2xl:gap-20'>
            <nav className='flex flex-col gap-5'>
              <p className='text-sm font-bold uppercase'>Product</p>
              <ul className='flex flex-col gap-3 whitespace-nowrap text-sm'>
                <li>
                  <Link
                    className='transition hover:text-theme_purple'
                    href='/blog'>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className='transition hover:text-theme_purple'
                    href='/videos'>
                    Videos
                  </Link>
                </li>
                <li>
                  <Link
                    className='transition hover:text-theme_purple'
                    href='/pricing'>
                    Pricing
                  </Link>
                </li>
                {/* https://stackoverflow.com/questions/75115890/link-anchor-in-nextjs-not-scrolling-to-id-but-when-manually-typed-in-the-ur */}
                <li>
                  <a
                    className='transition hover:text-theme_purple'
                    href='/pricing#faqs'>
                    FAQ&apos;s
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://docs.permit.io/'
                    className='transition hover:text-theme_purple'>
                    Docs
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    className='transition hover:text-theme_purple'
                    href='https://permit.productlane.com/roadmap'>
                    Roadmap
                  </a>
                </li>
              </ul>
            </nav>
            <nav className='flex flex-col gap-5'>
              <p className='text-sm font-bold uppercase'>Solutions</p>
              <ul className='flex flex-col gap-3 whitespace-nowrap text-sm'>
                <li>
                  <Link
                    className='transition hover:text-theme_purple'
                    href='/rbac'>
                    RBAC
                  </Link>
                </li>
                <li>
                  <Link
                    className='transition hover:text-theme_purple'
                    href='/abac'>
                    ABAC
                  </Link>
                </li>
                <li>
                  <Link
                    className='transition hover:text-theme_purple'
                    href='/rebac'>
                    ReBAC
                  </Link>
                </li>
                <li>
                  <Link
                    className='transition hover:text-theme_purple'
                    href='/elements'>
                    Elements
                  </Link>
                </li>
                <li>
                  <Link
                    className='transition hover:text-theme_purple'
                    href='/foaz'>
                    FoAz
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className='flex flex-col gap-5'>
              <p className='text-sm font-bold uppercase'>Company</p>
              <ul className='flex flex-col gap-3 whitespace-nowrap text-sm'>
                <li>
                  <Link
                    className='transition hover:text-theme_purple'
                    href='/about'>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className='transition hover:text-theme_purple'
                    href='/open-source'>
                    Open Source
                  </Link>
                </li>
                <li>
                  <Link
                    className='transition hover:text-theme_purple'
                    href='/career'>
                    Careers
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className='flex flex-col gap-5'>
              <p className='text-sm font-bold uppercase'>Support</p>
              <ul className='flex flex-col gap-3 whitespace-nowrap text-sm'>
                <li>
                  <Link
                    className='transition hover:text-theme_purple'
                    href='/legal/terms-and-conditions'>
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    className='transition hover:text-theme_purple'
                    href='/legal/privacy-policy'>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://permit-io.instatus.com/'
                    className='transition hover:text-theme_purple'>
                    Service Status
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='mailto:help@permit.io'
                    className='transition hover:text-theme_purple'>
                    Email
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* top right */}
          <div className='flex items-start justify-start lg:justify-self-end'>
            <button
              onClick={openModal}
              className='schedule_a_meeting group col-span-2 flex items-center justify-between gap-4 self-center justify-self-center rounded-full border border-theme_purple bg-theme_purple py-2 pl-[22px] pr-4 text-sm font-semibold text-slate-50 transition duration-300 hover:bg-transparent hover:text-theme_purple md:col-span-3'>
              <div className='flex items-center gap-3'>
                <Calendar className='pointer-events-none h-3 w-3' />
                <span className='pointer-events-none'>Schedule a Meeting</span>
              </div>
              <Check className='h-3 w-3' />
            </button>
          </div>
        </div>
        {/* bottom */}
        <div className='flex flex-col items-center gap-10 text-xs lg:flex-row lg:items-end lg:justify-between'>
          <Certified />
          <p>© {year} Permit Inc.</p>
        </div>
      </div>
      <JoinModule
        isOpen={isOpen}
        closeModal={closeModal}
        url={CALENDLY_URL}
        width='80vw'
      />
    </footer>
  );
};

export default Footer;
