import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { FeaturedCardProps } from './types';
import Title from '@/components/ui/Title';
import Text from '@/components/ui/Text';

const FeaturedCard = ({ post }: FeaturedCardProps) => {
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <article
        className={`group border-opacity-30 pb-10 lg:grid lg:grid-cols-2 lg:gap-28`}>
        {/* right */}
        <div className='lg:order-last lg:flex lg:flex-col-reverse lg:justify-between'>
          <figure className='relative overflow-hidden rounded-2xl'>
            <Image
              src={post.image.url}
              alt={post.title}
              width={post.image.width}
              height={post.image.height}
              className='h-auto w-auto object-cover transition duration-300 group-hover:scale-110'
              priority
            />
          </figure>
          <div className='mb-4 mt-2 flex items-center gap-3 lg:mb-14 lg:w-full lg:justify-end'>
            <Text styles='font-semibold' size={14}>
              <p>
                {post.authorReference.name}
                {post.authorSecondary
                  ? ` & ${post.authorSecondary.name}`
                  : null}
              </p>
            </Text>
            <Text size={14}>
              <time dateTime={`${post.date}`}>
                {format(new Date(post.date), 'MMM dd yyyy')}
              </time>
            </Text>
          </div>
        </div>
        {/* left */}
        <div className='lg:flex lg:flex-col lg:justify-between lg:py-5'>
          <div className='flex flex-col gap-y-2 lg:gap-y-8'>
            <Title size={36}>
              <h2>{post.title}</h2>
            </Title>
            <Text size={18}>
              <p>{post.summery}</p>
            </Text>
          </div>
          <div className='mt-10 flex items-center gap-2 font-bold text-theme_purple'>
            <div>Read more</div>
            <ChevronRight className='h-4 w-4 transition duration-300 group-hover:translate-x-1' />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default FeaturedCard;
