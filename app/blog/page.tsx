import PagesFooter from "@/components/PagesFooter";
import MobilePaddingTop from "@/components/layout/MobilePaddingTop";
import SectionDotsBackground from "@/app/(home-new)/SectionDotsBackground";
import FeaturedStories from "@/app/blog/FeaturedStories";
import AllPosts from "@/app/blog/AllPosts";

import { generateRSSfeed } from "@/services/rss";

// services
import {
  getFeaturedPosts1,
  getFeaturedPosts2,
  getPostsTags,
  getRestPostsCards,
  getRestPostsRSS,
} from "@/services";

import { Metadata } from "next";

const page_title =
  "Auth-z and Permissions Management Updates and News | Permit.io";
const page_description =
  "Blogs, articles, best practices and guides. Everything you need to know about the auth-z and auth-n landscape including open source OPAL. Read to become a pro.";
const canonical_url = "/blog";

export const metadata: Metadata = {
  title: page_title,
  description: page_description,
  // open graph
  openGraph: {
    title: page_title,
    description: page_description,
    url: `https://www.permit.io${canonical_url}`,
    images: "https://www.permit.io/opengraph-image.png",
  },
  // twitter
  twitter: {
    title: page_title,
    description: page_description,
  },
  // canonical
  alternates: {
    canonical: canonical_url,
  },
};

type Params = {
  searchParams: { page: string };
};

export default async function Page({ searchParams }: Params) {
  const page = searchParams?.page ? parseInt(searchParams?.page) : 1;
  const pageSize = 6;

  const getFirstPost = await getFeaturedPosts1();
  const getSecondPost = await getFeaturedPosts2();
  const { posts: getTheRestsOfPosts, totalCount } = await getRestPostsCards(
    page ? page : 1,
    pageSize
  );
  const getTags = await getPostsTags();
  const postsForRSS = await getRestPostsRSS();

  await generateRSSfeed(postsForRSS);

  return (
    <>
      <MobilePaddingTop />
      <div className="container relative z-20 max-w-7xl">
        <FeaturedStories
          featuredPost1={getFirstPost || []}
          featuredPost2={getSecondPost || []}
        />
        <AllPosts
          posts={getTheRestsOfPosts || []}
          tags={getTags || []}
          currentPage={page}
          totalCount={totalCount || 0}
          pageSize={pageSize}
        />
      </div>
      <PagesFooter />
      <SectionDotsBackground />
    </>
  );
}
