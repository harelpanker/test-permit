const Section1 = () => {
  return (
    <section className='px-4 pb-12 xl:pb-20'>
      <div className='container relative z-20 max-w-[940px]'>
        <h2 className='relative z-20 text-center text-3xl font-bold md:text-4xl'>
          Join Our Team!
        </h2>

        <div className='relative z-20 mt-12 lg:mt-7'>
          <div className='relative z-20 flex flex-col items-start gap-8 rounded-3xl bg-white px-6 py-7 shadow-video xl:mt-10 xl:flex-row xl:items-center xl:gap-12 xl:px-16 xl:py-10'>
            <p className='text-lg xl:text-2xl'>
              <strong>
                If you are passionate about developer tools and the developer
                community, we&apos;re looking for you!
              </strong>
              <br />
              Join us as we build great developer experiences through valuable
              software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
