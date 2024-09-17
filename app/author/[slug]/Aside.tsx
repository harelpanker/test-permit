import { FC } from 'react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

type AsideProps = {
  author: {
    name: string;
    image: {
      url: string;
    };
    linkedin: string;
    bio: string;
  };
};

const Aside: FC<AsideProps> = ({ author }) => {
  return (
    <aside className='w-72 pl-8 pt-28 col-span-3 relative z-10 h-full min-h-full hidden lg:block pb-20'>
      <div className='sticky top-22'>
        <div className='flex flex-col items-start gap-3'>
          <div className='rounded-full p-1 border-slate-100 border flex justify-center items-center'>
            <Image
              className='rounded-full'
              src={author?.image.url}
              alt={author?.name}
              width={100}
              height={100}
            />
          </div>
          <div>
            <div className='flex gap-2 items-center mb-1'>
              <h2 className='font-bold text-2xl'>{author.name}</h2>
              <a
                className='flex items-center justify-center text-lg relative top-px'
                href={author.linkedin}
                target='_blank'
                rel='noopener noreferrer'>
                <Linkedin className='w-4 h-4' />
              </a>
            </div>

            <p className='text-sm'>{author.bio}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
