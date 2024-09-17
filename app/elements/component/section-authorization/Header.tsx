import TypographyH2 from '@/app/(home-new)/components/TypographyH2';

const Header = () => {
  const links = [
    { text: 'User Management', link: '/elements#user-management' },
    { text: 'Approval Flows', link: '/elements#approval-flows' },
    { text: 'Audit Logs', link: '/elements#audit-logs' },
  ];

  return (
    <header className='flex w-full max-w-[480px] flex-col gap-y-3 lg:max-w-full'>
      <div className='px-5 lg:px-0'>
        <TypographyH2>
          <span className='lg:block'>Authorization Components </span>
          for Any Use Case
        </TypographyH2>
      </div>
      <div className='relative'>
        <ul className='relative z-10 flex gap-x-2 overflow-x-auto px-5 lg:px-0'>
          {links.map((link) => (
            <li key={link.text} className='shrink-0'>
              <a
                className='block rounded-full border-2 border-[#D1B9B0] px-3 py-2 font-poppins text-sm font-semibold text-[#2B1400] transition duration-300 hover:border-[#a18072] hover:bg-[#ffcca7]'
                href={link.link}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className='pointer-events-none absolute left-auto right-0 top-0 z-20 h-full w-5 bg-gradient-to-l from-[#fde7d7] to-transparent sm:hidden'></div>
      </div>
    </header>
  );
};

export default Header;
