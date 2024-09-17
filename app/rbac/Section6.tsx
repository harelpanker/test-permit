import CTAButton from '@/components/ui/CTAButton';

const Section6 = () => {
  return (
    <section className='relative z-20 bg-[#F3E7FC] px-4 py-12 lg:px-12'>
      <div className='container flex flex-col items-center gap-7 text-center lg:flex-row lg:justify-center lg:text-left'>
        <h2 className='text-3xl font-bold text-[#7011E4] md:text-4xl'>
          Can Permit handle your production scale?
        </h2>

        <CTAButton
          bgColor='purple'
          text='Learn More'
          link='https://docs.permit.io/getting-started/deploying/overview#sidecar'
        />
      </div>
    </section>
  );
};

export default Section6;
