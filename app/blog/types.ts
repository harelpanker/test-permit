export type FeaturedPost = {
  id: string;
  slug: string;
  title: string;
  summery: string;
  date: string;
  authorReference: { id: string; name: string };
  authorSecondary: { id: string; name: string } | null;
  image: { url: string; width: number; height: number };
};

export type FeaturedStoriesProps = {
  featuredPost1: FeaturedPost[];
  featuredPost2: FeaturedPost[];
};

export type PostCards = {
  id: string;
  slug: string;
  title: string;
  summery: string;
  date: string;
  authorReference: { id: string; name: string };
  authorSecondary: { id: string; name: string } | null;
  image: { url: string; width: number; height: number };
  tags: { id: string; name: string }[];
}[];

export type Tag = { id: string; name: string; slug: string };

export type AllPostsProps = {
  posts: PostCards;
  tags: Tag[];
  currentPage: number;
  totalCount: number;
  pageSize: number;
};

export type PostCardProps = {
  post: {
    id: string;
    slug: string;
    title: string;
    summery: string;
    date: string;
    authorReference: {
      id: string;
      name: string;
    };
    authorSecondary: { id: string; name: string } | null;
    image: {
      url: string;
      width: number;
      height: number;
    };
  };
};

export type FeaturedCardProps = {
  post: {
    id: string;
    slug: string;
    title: string;
    summery: string;
    date: string;
    authorReference: {
      id: string;
      name: string;
    };
    authorSecondary: { id: string; name: string } | null;
    image: {
      url: string;
      width: number;
      height: number;
    };
  };
};
