import { getRestPostsRSS } from '.';
import { Feed } from 'feed';
import * as fs from 'fs';

export const generateRSSfeed = async (postsForRSS) => {
  const posts = postsForRSS || (await getRestPostsRSS());
  // init feed
  const feed = new Feed({
    title: 'Permit.io Blog',
    description: 'Permit.io Blog',
    id: 'http://permit.io/blog',
    link: 'http://permit.io/blog',
    language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: 'http://permit.io/open-grhpe.png',
    favicon: 'http://permit.io/favicon.ico',
    copyright: 'All rights reserved Permit.io',
    updated: new Date(), // optional, default = today
    generator: 'Permit.io RSS gen', // optional, default = 'Feed for Node.js'
    feedLinks: {
      rss2: 'http://permit.io/rss/feed.xml',
      json: 'https://permit.io/rss/feed.json',
      atom: 'https://permit.io/rss/atom.xml',
    },
    author: {
      name: 'Permit.io',
      email: 'help@permit.io',
      link: 'https://permit.io',
    },
  });

  // load posts to feed
  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: post.slug,
      link: `https://www.permit.io/blog/${post.slug}`,
      description: post.summery,
      content: post.richText.html,
      author: [
        {
          name: post.authorReference ? post.authorReference.name : post.author,
          email: 'info@permit.io',
          link: 'https://permit.io',
        },
      ],
      date: new Date(post.date),
      image: post.image.url,
    });
  });

  // https://stackoverflow.com/questions/28498296/enoent-no-such-file-or-directory-on-fs-mkdirsync
  // save to disc
  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
  fs.writeFileSync('./public/rss/feed.json', feed.json1());
};
