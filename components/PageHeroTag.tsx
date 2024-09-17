const PageHeroTag = ({ text }: { text: string }) => {
  return (
    <div className='flex h-6 items-center justify-center rounded bg-[#FFDCC3] px-3 py-2 text-xs font-medium uppercase leading-none'>
      {text}
    </div>
  );
};

export default PageHeroTag;
