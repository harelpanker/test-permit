import { FC } from 'react';
import Header from './Header';
import PostBody from './PostBody';

type ArticleProps = {
  post: {
    title: string;
    summery: string;
    date: string;
    image: { url: string; width: number; height: number };
    tags: { id: string; name: string }[];
    authorReference: {
      name: string;
    };
    titleBottom: string | null;
    titleTop: string | null;
    richText: {
      html: string;
    };
    removeToc: boolean | null;
  };
};

const Article: FC<ArticleProps> = ({ post }) => {
  return (
    <article className='col-span-12 lg:col-span-9'>
      <Header post={post} />
      <PostBody post={post} />
    </article>
  );
};

export default Article;
