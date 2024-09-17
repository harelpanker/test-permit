import { Tag } from './types';
import Link from 'next/link';

type TagsListProps = {
  tags: Tag[];
};

const TagsList= ({ tags }: TagsListProps) => {
  return (
    <ul className='group flex flex-wrap gap-x-3 gap-y-2'>
      {tags.map((tag) => (
        <li key={tag.id} className='flex'>
          <Link
            className='rounded-full border border-theme_black2 px-3 py-1 text-xs font-medium transition duration-500 hover:bg-theme_black2 hover:text-theme_white hover:!opacity-100 group-hover:opacity-50 md:text-sm'
            href={`/tags/${tag.slug}`}>
            {tag.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TagsList;
