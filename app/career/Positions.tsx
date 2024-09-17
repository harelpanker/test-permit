import { FC } from 'react';
import Link from 'next/link';

type PositionsProps = {
  positions: {
    id: string;
    positionName: string;
    slug: string;
    location: string;
  }[];
};

const Positions: FC<PositionsProps> = ({ positions }) => {
  return (
    <section className='relative z-10 overflow-hidden px-4 pb-12 xl:pb-20 xl:pt-6'>
      <div className='container relative z-20 max-w-[940px]'>
        <h2 className='relative z-20 text-center text-3xl font-bold md:text-4xl'>
          Open Positions:
        </h2>

        <div className='relative z-20 mt-7'>
          <div className='relative z-20 flex flex-col items-start gap-8 rounded-3xl bg-white px-6 py-7 shadow-video xl:mt-10 xl:flex-row xl:items-center xl:gap-12 xl:px-16 xl:py-10'>
            <ul className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
              {positions.map((position) => (
                <li key={position.id}>
                  <Link
                    passHref
                    href={`/career/${position.slug}`}
                    className='flex flex-col gap-2 rounded-lg bg-white p-5'>
                    <h3 className='text-2xl font-bold lg:text-3xl'>
                      {position.positionName}
                    </h3>
                    <p className='text-sm'>{position.location}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Positions;
