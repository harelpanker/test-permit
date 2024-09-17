const ProductHuntBanner = () => {
  return (
    <div className='harel relative w-full bg-[#2B1400] px-5 py-2 text-center font-poppins text-sm font-medium md:text-lg lg:px-12 lg:py-3'>
      <h2 className='relative z-20'>
        <span className='bg-gradient-to-r from-[#FFB171] to-[#BD8AFC] bg-clip-text text-transparent'>
          Permit.io is live on ProductHunt!!! <br className='block md:hidden' />
          <a
            rel='noreferrer'
            target='_blank'
            className='border-b border-[#BD8AFC] underline hover:border-[#BD8AFC] hover:border-opacity-50 hover:text-transparent'
            href='https://www.producthunt.com/posts/permit-share-if'>
            Support us with a vote
          </a>{' '}
        </span>
        🤍
      </h2>
    </div>
  );
};

export default ProductHuntBanner;
