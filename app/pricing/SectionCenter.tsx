import { MoveRight } from 'lucide-react';
import bg_ui_desktop from '../(home-new)/assets/section-ui/bg_section_ui_desktop.svg';
import bg_ui_mobile from '../(home-new)/assets/section-ui/bg_section_ui_mobile.svg';

import SectionBGWrapper from '../(home-new)/components/SectionBGWrapper';
import icon1 from './assets/center-section/1.svg';
import icon2 from './assets/center-section/2.svg';
import icon3 from './assets/center-section/3.svg';
import Image, { StaticImageData } from 'next/image';
import SectionRecommendation, {
  TestimonialsProps,
} from '../(home-new)/SectionRecommendation';
import LogosHero from '../(home-new)/components/LogosHero';
import SectionCenterCTA from '@/components/SectionCenterCTA';

const Item = ({
  icon,
  title,
  text,
  linkText,
}: {
  icon: StaticImageData;
  title: string;
  text: string;
  linkText: string;
}) => {
  return (
    <li>
      <a
        className='group flex h-full w-full max-w-[338px] flex-col justify-between gap-2 rounded-[10px] bg-[#FDFCFC] px-10 py-8 shadow-[0px_0px_6px_2px_rgba(67,_48,_43,_0.1)] transition hover:translate-y-1 hover:shadow-none'
        target='_blank'
        rel='noopener noreferrer'
        href='https://permit-io.slack.com/join/shared_invite/zt-1ri8eogd0-fObRmLhUm74ESWdW0pWHxw#/shared-invite/email'
      >
        <div className='flex flex-col items-start gap-y-2'>
          <Image className='mb-[2px]' src={icon} alt={title} />
          <h2 className='text-lg font-semibold tracking-[-0.5px]'>{title}</h2>
          <p className='text-[#846358]'>{text}</p>
        </div>
        <div className='flex items-center gap-x-1 px-1 py-[2px] font-medium text-[#7011E4]'>
          {linkText}
          <MoveRight
            size={16}
            className='transition group-hover:translate-x-1'
          />
        </div>
      </a>
    </li>
  );
};

const SectionCenter = ({ recommendations }: TestimonialsProps) => {
  return (
    <SectionBGWrapper imageDesktop={bg_ui_desktop} imageMobile={bg_ui_mobile}>
      <div className='flex flex-col px-5 py-14 gap-y-12 lg:px-12 lg:pb-24 lg:pt-[86px]'>
        <section>
          <ul className='container flex max-w-[1064px] flex-wrap justify-center gap-6'>
            <Item
              icon={icon1}
              title='Free for OSS projects'
              text="Need access-control for your open-source project? We got you covered! Enjoy the full power of Permit's PRO tier for yourself and your OSS users, for free! Contact us to see if you qualify"
              linkText='Start with RBAC'
            />
            <Item
              icon={icon2}
              title='Discounts Available'
              text='We offer multiple ways to get significant discounts, including discounts for non-profits, young startups, early-closers, and testimonials.'
              linkText='Talk to us to learn more'
            />
            <Item
              icon={icon3}
              title='Monthly Billing'
              text='The prices mentioned above are calculated for annual contracts (12% cheaper!). Monthly billing plans are also available.'
              linkText='Get a price quote'
            />
          </ul>
        </section>
        <SectionCenterCTA isPricingWidth />
        <div className='container max-w-[1210px] lg:mt-12'>
          <SectionRecommendation
            showOnlyRecommendations
            recommendations={recommendations}
          />
        </div>
        <div className='container relative z-20 flex max-w-[1065px] flex-col items-center justify-center'>
          <LogosHero />
        </div>
      </div>
    </SectionBGWrapper>
  );
};

export default SectionCenter;
