import CTAButton from '@/components/ui/CTAButton';
const SectionCTA = () => {
  return (
    <section
      id='get-started-today'
      className='relative z-10 bg-[#F9EDE7] px-5 lg:px-12'>
      <div className='h-16 lg:h-[88px]' />
      <div className='container flex max-w-7xl flex-col items-center gap-6 rounded-2xl bg-[#A666F4] px-6 py-[58px] text-center text-[#FDFCFF]'>
        <h2 className='text-3xl font-bold lg:text-5xl'>
          <span className='lg:block'>Get started today</span> and get $250
          towards your account!
        </h2>
        <p className='font-medium lg:text-[22px]'>
          <span className='lg:block'>
            To enjoy this special limited time ProductHunt offer, use the coupon
            code <span className='rounded bg-theme_purple px-[6px] pb-[2px]'>PH2023</span>
          </span>{' '}
          when upgrading your Permit account before 10/10/2023
        </p>
        <CTAButton
          text='Get Started Now'
          bgColor='purple'
          link='https://app.permit.io/?utm_source=website&utm_medium=website-product-hunt'
        />
      </div>
      <div className='h-16 lg:h-[88px]' />
    </section>
  );
};

export default SectionCTA;
