'use client';
import { useWindowScroll } from '@mantine/hooks';

const ProductHuntFixed = () => {
  const [scroll] = useWindowScroll();

  return (
    <div
      style={{ boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.25)' }}
      className={`${
        scroll.y < 200
          ? 'pointer-events-none translate-y-10 scale-90 opacity-0'
          : 'pointer-events-auto translate-y-0 scale-100 opacity-100'
      } fixed inset-0 bottom-3 left-auto right-3 top-auto z-30 hidden w-full max-w-[280px] rounded-lg border border-[#FDFCFC] bg-white py-4 pl-6 pr-3 text-lg font-bold text-[#43302B] transition duration-500 md:block lg:bottom-5 lg:right-5`}>
      <p>
        Permit.io is live on ProductHunt!{' '}
        <a
          rel='noreferrer'
          target='_blank'
          className='block text-theme_purple transition hover:underline hover:opacity-90'
          href='https://www.producthunt.com/posts/permit-share-if'>
          Support us with a vote 💜
        </a>
      </p>
    </div>
  );
};

export default ProductHuntFixed;
