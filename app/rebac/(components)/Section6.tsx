import CTAButton from '@/components/ui/CTAButton';

const Section6 = () => {
  return (
    <section className='bg-[#F3E7FC] px-5 py-12 lg:px-12'>
      <div className='container flex flex-col items-center justify-center gap-7 text-center lg:flex-row'>
        <h2 className='text-3xl font-bold text-theme_purple lg:text-4xl'>
          Can Permit handle your production scale?
        </h2>
        <CTAButton
          text='Learn More'
          bgColor='purple'
          link='https://docs.permit.io/getting-started/deploying/overview/#sidecar'
        />
      </div>
    </section>
  );
};

export default Section6;
