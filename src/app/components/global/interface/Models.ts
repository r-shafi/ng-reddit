export interface Post {
  title: string;
  author: string;
  subreddit: string;
  thumbnail: string;
  url: string;
  upvote_ratio: number;
  preview: {
    images: any;
  };
  media: {
    oembed: {
      html: string;
      thumbnail_url: string;
    };
    reddit_video: { fallback_url: string };
  };
  // data that wouldn't be used in view
  domain: string;
  post_hint: string;
  is_video: boolean;
  is_reddit_media_domain?: boolean;
  is_self: boolean;
}
