import {
  getRestPostsRSS,
  getPositionsCards,
  getSitemapAuthors,
} from '../services';

export default async function sitemap() {
  const postsData = await getRestPostsRSS();
  const authorsData = await getSitemapAuthors();
  const careersData = await getPositionsCards();

  const posts = postsData.map((item) => {
    return {
      url: `https://www.permit.io/blog/${item.slug}`,
      lastModified: new Date(),
    };
  });
  const authors = authorsData.map((item) => {
    return {
      url: `https://www.permit.io/author/${item.slug}`,
      lastModified: new Date(),
    };
  });
  const careers = careersData.map((item) => {
    return {
      url: `https://www.permit.io/career/${item.slug}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: 'https://www.permit.io/',
      lastModified: new Date(),
    },
    {
      url: 'https://www.permit.io/rbac',
      lastModified: new Date(),
    },
    {
      url: 'https://www.permit.io/rebac',
      lastModified: new Date(),
    },
    {
      url: 'https://www.permit.io/abac',
      lastModified: new Date(),
    },
    {
      url: 'https://www.permit.io/career',
      lastModified: new Date(),
    },
    {
      url: 'https://www.permit.io/pricing',
      lastModified: new Date(),
    },
    {
      url: 'https://www.permit.io/open-source',
      lastModified: new Date(),
    },
    {
      url: 'https://www.permit.io/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://www.permit.io/videos',
      lastModified: new Date(),
    },
    {
      url: 'https://www.permit.io/elements',
      lastModified: new Date(),
    },
    {
      url: 'https://www.permit.io/company',
      lastModified: new Date(),
    },
    {
      url: 'https://www.permit.io/foaz',
      lastModified: new Date(),
    },
    ...posts,
    ...authors,
    ...careers,
  ];
}
