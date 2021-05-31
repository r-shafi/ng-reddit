import { Post } from '../interface/Models';

const domains = [
  'i.imgur.com',
  'gfycat.com',
  'redgifs.com',
  'i.redd.it',
  'v.redd.it',
];

export function isMedia(post: Post): Boolean {
  if (!post.post_hint || !post.domain || !domains.includes(post.domain)) {
    return false;
  }
  return true;
}

export function extractURL(iframe: string) {
  const urlRegex = /(https?:\/\/[^ ]*)/;
  return iframe.match(urlRegex)![1].replace('"', '');
}

export function childRoute(route: string) {
  const paths = route.split('/');
  return paths[paths.length - 1];
}
