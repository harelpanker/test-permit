import { request, gql } from "graphql-request";

const graphqlAPI =
  "https://us-west-2.cdn.hygraph.com/content/ckwdieryh003k01xpdrau9db0/master";

// Featured section (home page)
export const getFeaturedSection = async () => {
  const query = gql`
    query getFeaturedSection {
      announcementSections {
        id
        title
        topTitle
        mainButtonLink
        mainButtonText
        show
        secondaryButtonLink
        secondaryButtonText
        description {
          html
        }
        image {
          url
          width
          height
        }
        imageMobile {
          url
          width
          height
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.announcementSections;
};

// Codes section (home page)
export const getCodes = async () => {
  const query = gql`
    query getCodes {
      codes(orderBy: position_ASC) {
        id
        language
        languageId
        copy
        textAfter
        textBefore
        active
        docsLink
        icon {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.codes;
};
// Codes section (home page)
export const getCodesPlugAndPlay = async () => {
  const query = gql`
    query getCodes {
      codes(orderBy: position_ASC) {
        id
        nameOnTag
        iconActive {
          url
          width
          height
        }
        iconNotActive {
          url
          width
          height
        }
        language
        languageId
        copy
        textAfter
        textBefore
        active
        docsLink
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.codes;
};
// recommendations
export const getRecommendations = async () => {
  const query = gql`
    query getRecommendations {
      recommendations {
        id
        nameAndPosition
        name
        position
        company
        short
        avatar {
          url
          width
          height
        }
        recommendation {
          html
        }
        companyLogo {
          height
          width
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.recommendations;
};
// recommendations
export const getRecommendationsForHomepage = async () => {
  const query = gql`
    query getRecommendations {
      recommendations(
        first: 9
        where: { inHomePage: true }
        orderBy: order_ASC
      ) {
        id
        nameAndPosition
        name
        companyAndPosition
        short
        avatar {
          url
          width
          height
        }
        order
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.recommendations;
};
// positions - cards
export const getPositionsCards = async () => {
  const query = gql`
    query getPosts {
      open_positions {
        id
        positionName
        slug
        location
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.open_positions;
};
// positions - full
export const getPositionDetails = async (slug) => {
  const query = gql`
    query getPositionDetails($slug: String!) {
      open_positions(where: { slug: $slug }) {
        id
        positionName
        slug
        location
        intro {
          html
        }
        aboutUs {
          html
        }
        aboutYou {
          html
        }
        whatYoullDo {
          html
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.open_positions;
};
// videos
export const getVideos = async () => {
  const query = gql`
    query getVideos {
      videos(orderBy: createdAt_DESC) {
        id
        url
        expert
        image {
          url
          width
          height
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.videos;
};
// featured posts 1
export const getFeaturedPosts1 = async () => {
  const query = gql`
    query getPosts {
      blogPosts(
        first: 1
        orderBy: date_DESC
        where: { isFeaturedOne: true, isHidden: false }
      ) {
        id
        slug
        title
        summery
        date
        authorReference {
          id
          name
        }
        authorSecondary {
          id
          name
        }
        image {
          url
          width
          height
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.blogPosts;
};
// featured posts 2
export const getFeaturedPosts2 = async () => {
  const query = gql`
    query getPosts {
      blogPosts(
        first: 1
        orderBy: date_DESC
        where: { isFeaturedTwo: true, isHidden: false }
      ) {
        id
        slug
        title
        summery
        date
        authorReference {
          id
          name
        }
        authorSecondary {
          id
          name
        }
        image {
          url
          width
          height
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.blogPosts;
};
// get posts cards without 1 and 2
export const getRestPostsCards = async (page, pageSize) => {
  const query = gql`
    query getPosts($skip: Int!, $first: Int!) {
      blogPosts(
        orderBy: date_DESC
        where: { isHidden: false, isFeaturedTwo: false, isFeaturedOne: false }
        skip: $skip
        first: $first
      ) {
        id
        slug
        title
        summery
        date
        authorReference {
          id
          name
        }
        authorSecondary {
          id
          name
        }
        image {
          url
          width
          height
        }
        tags {
          id
          name
        }
      }
      blogPostsConnection(
        where: { isHidden: false, isFeaturedTwo: false, isFeaturedOne: false }
      ) {
        aggregate {
          count
        }
      }
    }
  `;

  const skip = (page - 1) * pageSize;
  const result = await request(
    "https://api-us-west-2.graphcms.com/v2/ckwdieryh003k01xpdrau9db0/master",
    query,
    { skip, first: pageSize }
  );
  return {
    posts: result.blogPosts,
    totalCount: result.blogPostsConnection.aggregate.count,
  };
};

export const getRestPostsRSS = async () => {
  const query = gql`
    query getPosts {
      blogPosts(orderBy: date_DESC, where: { includeInRss: true }) {
        id
        title
        slug
        summery
        author
        date
        image {
          url
        }
        richText {
          html
        }
        authorReference {
          name
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.blogPosts;
};
// get posts cards max 6
export const getMax6PostsCards = async () => {
  const query = gql`
    query getPosts {
      blogPosts(
        first: 6
        orderBy: date_DESC
        where: { isHidden: false, isFeaturedTwo: false, isFeaturedOne: false }
      ) {
        id
        slug
        title
        summery
        date
        authorReference {
          id
          name
        }
        image {
          url
          width
          height
        }
        tags {
          id
          name
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.blogPosts;
};
// posts tags
export const getPostsTags = async () => {
  const query = gql`
    query getTags {
      tags {
        id
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.tags;
};
// get post details
export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      blogPosts(where: { slug: $slug }) {
        id
        title
        slug
        summery
        date
        author
        articleType
        updatedAt
        createdAt
        image {
          url
          width
          height
        }
        richText {
          html
        }
        tags {
          id
          name
        }
        authorReference {
          id
          name
          slug
          linkedin
          bio
          twitterCreator
          image {
            url
          }
        }
        authorSecondary {
          id
          name
          slug
          linkedin
          bio
          twitterCreator
          image {
            url
          }
        }
        canonical_url
        titleBottom
        titleTop
        removeToc
        metaKeywords
        postBanners {
          buttonLink
          buttonText
          id
          shortText
          title
          image {
            height
            width
            url
          }
        }
        asideButtonLink
        asideButtonText
        asideTitle
        asideIcon {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.blogPosts;
};
// tags
export const getTags = async (slug) => {
  const query = gql`
    query getTags($slug: String!) {
      tags(where: { slug: $slug }) {
        name
        slug
        tags {
          ... on Posts {
            id
            slug
            title
            summery
            date
            isHidden
            authorReference {
              id
              name
            }
            authorSecondary {
              id
              name
            }
            image {
              url
              width
              height
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.tags;
};
// author
export const getAuthorDetails = async (slug) => {
  const query = gql`
    query getAuthorDetails($slug: String!) {
      authors(where: { slug: $slug }) {
        id
        name
        bio
        slug
        linkedin
        image {
          url
        }
        blogPosts(orderBy: publishedAt_DESC) {
          id
          slug
          title
          summery
          tags {
            id
            name
          }
          image {
            url
            width
            height
          }
          thumbnailImage {
            url
            width
            height
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.authors;
};

// news
export const getSitemapAuthors = async () => {
  const query = gql`
    query getNews {
      authors {
        slug
        updatedAt
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.authors;
};

// faqs
export const getFaqs = async () => {
  const query = gql`
    query getFaqs {
      faqs(orderBy: order_ASC) {
        id
        answer {
          html
        }
        question
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.faqs;
};
// news
export const getNews = async () => {
  const query = gql`
    query getNews {
      newsList {
        message {
          html
        }
        messageMobile {
          html
        }
        id
        startDate
        endDate
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result;
};

// legal
export const getLegalDetails = async (slug) => {
  const query = gql`
    query GetLegalDetails($slug: String!) {
      legals(where: { slug: $slug }) {
        id
        title
        slug
        richText {
          html
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.legals;
};

// members
export const getMembersTotalNumber = async () => {
  const query = gql`
    query getMembersTotalNumber {
      members(first: 1) {
        number
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.members[0].number;
};
