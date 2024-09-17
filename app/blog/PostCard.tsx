import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { PostCardProps } from './types';
import Title from '@/components/ui/Title';
import Text from '@/components/ui/Text';

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <li>
      <Link href={`/blog/${post.slug}`} passHref>
        <article className='group pb-10'>
          <figure className='relative overflow-hidden rounded-2xl'>
            <Image
              src={post.image.url}
              alt={post.title}
              width={post.image.width}
              height={post.image.height}
              className='h-full w-full object-cover transition duration-300 group-hover:scale-110'
            />
          </figure>
          <div className='mb-4 mt-2 flex items-center gap-3'>
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
          <div>
            <Title styles='mb-2' size={26}>
              <h3>{post.title}</h3>
            </Title>

            <Text size={16}>
              <p>{post.summery}</p>
            </Text>
          </div>
          <div className='mt-10 flex items-center gap-2 font-bold text-theme_purple'>
            <div>Read more</div>
            <ChevronRight className='h-4 w-4 transition duration-300 group-hover:translate-x-1' />
          </div>
        </article>
      </Link>
    </li>
  );
};

export default PostCard;
