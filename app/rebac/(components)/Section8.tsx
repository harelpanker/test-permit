'use client';

import Image from 'next/image';
import CTAButton from '@/components/ui/CTAButton';

import loading_img from '/public/images/loading.svg';

const Section8 = ({ memberNumber }: { memberNumber: number }) => {
  const dataLayerHandler = () => {
    let dataLayer = (window as any).dataLayer;
    if (typeof window !== 'undefined') {
      dataLayer = dataLayer || [];
      dataLayer.push({
        event: 'slack_landing_page',
        path: window.location.href,
      });
    }
  };

  return (
    <div className='flex flex-col gap-16 bg-[#FFF1E7] px-5 py-16 text-center lg:px-12 lg:pb-28 lg:text-left'>
      <section className='container flex w-full max-w-sm flex-col items-center gap-6 lg:max-w-[910px] lg:flex-row-reverse lg:justify-between'>
        <header className='flex w-full max-w-[464px] flex-col items-center gap-6  lg:items-start'>
          <h2 className='text-3xl font-bold leading-tight text-[#451E11] md:text-4xl'>
            Try it yourself. It&apos;s free. Test in minutes, go to prod in
            days.
          </h2>
          <CTAButton
            bgColor='purple'
            text='Get Started Now'
            link='https://app.permit.io/?utm_source=website&utm_medium=website-rebac'
          />
        </header>
        <figure className='w-full max-w-[344px] lg:max-w-full'>
          <Image src={loading_img} alt='' />
        </figure>
      </section>
      <section>
        <div className='container flex w-full max-w-[1060px] flex-col items-center gap-6 rounded-[20px] bg-[#F3E7FC] px-7 py-12 text-theme_purple md:flex-row md:items-start md:justify-between md:px-[100px]'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-3xl font-bold'>
              Join our
              <br className='md:hidden' /> Community
            </h2>
            <p className='text-[22px] font-bold text-[#974EF2]'>
              {memberNumber} Members
            </p>
          </div>
          <hr className='h-[2px] w-full justify-self-stretch border-0 bg-[#D3B3FA] md:h-[152px] md:w-[2px]' />
          <div className='flex flex-col items-center gap-6 pt-3 md:items-start md:pt-0'>
            <p className='text-lg font-medium'>
              Get support from our experts
              <br />
              Learn from fellow devs
            </p>
            <a
              onClick={dataLayerHandler}
              target='_blank'
              rel='noopener noreferrer'
              className='pointer-events-none flex items-center gap-[10px] rounded-full bg-[#DEC5FB] px-5 py-3 text-lg font-bold transition hover:bg-[#d8b6ff]'
              href='https://permit-io.slack.com/join/shared_invite/zt-nz6yjgnp-RlP9rtOPwO0n0aH_vLbmBQ'>
              <svg
                width='18'
                height='19'
                viewBox='0 0 18 19'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M4.89505 10.9122C4.89505 11.7245 4.23149 12.3881 3.4192 12.3881C2.60691 12.3881 1.94336 11.7245 1.94336 10.9122C1.94336 10.1 2.60691 9.43635 3.4192 9.43635H4.89505V10.9122ZM5.6387 10.9122C5.6387 10.1 6.30225 9.43635 7.11454 9.43635C7.92686 9.43635 8.59038 10.1 8.59038 10.9122V14.6075C8.59038 15.4199 7.92686 16.0834 7.11454 16.0834C6.30225 16.0834 5.6387 15.4199 5.6387 14.6075V10.9122ZM7.11454 4.9224C6.30225 4.9224 5.6387 4.25883 5.6387 3.44655C5.6387 2.63426 6.30225 1.9707 7.11454 1.9707C7.92686 1.9707 8.59038 2.63426 8.59038 3.44655V4.9224H7.11454ZM7.11454 5.66604C7.92686 5.66604 8.59038 6.3296 8.59038 7.14189C8.59038 7.9542 7.92686 8.61773 7.11454 8.61773H3.4192C2.60691 8.61773 1.94336 7.9542 1.94336 7.14189C1.94336 6.3296 2.60691 5.66604 3.4192 5.66604H7.11454ZM13.1044 7.14189C13.1044 6.3296 13.7679 5.66604 14.5802 5.66604C15.3925 5.66604 16.056 6.3296 16.056 7.14189C16.056 7.9542 15.3925 8.61773 14.5802 8.61773H13.1044V7.14189ZM12.3607 7.14189C12.3607 7.9542 11.6972 8.61773 10.8849 8.61773C10.0726 8.61773 9.40901 7.9542 9.40901 7.14189V3.44655C9.40901 2.63426 10.0726 1.9707 10.8849 1.9707C11.6972 1.9707 12.3607 2.63426 12.3607 3.44655V7.14189ZM10.8849 13.1318C11.6972 13.1318 12.3607 13.7953 12.3607 14.6075C12.3607 15.4199 11.6972 16.0834 10.8849 16.0834C10.0726 16.0834 9.40901 15.4199 9.40901 14.6075V13.1318H10.8849ZM10.8849 12.3881C10.0726 12.3881 9.40901 11.7245 9.40901 10.9122C9.40901 10.1 10.0726 9.43635 10.8849 9.43635H14.5802C15.3925 9.43635 16.056 10.1 16.056 10.9122C16.056 11.7245 15.3925 12.3881 14.5802 12.3881H10.8849Z'
                  fill='#7011E4'
                />
              </svg>

              <span className='pointer-events-none'>
                Join Permit&apos;s Slack
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section8;
