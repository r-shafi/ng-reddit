import { Post } from '../interface/Models';

const mediaDomains = [
  'i.imgur.com',
  'gfycat.com',
  'redgifs.com',
  'i.redd.it',
  'v.redd.it',
  'streamable.com',
];

const imageDomains = ['i.imgur.com', 'i.redd.it'];

const videoDomains = [
  'clips.twitch.tv',
  'gfycat.com',
  'redgifs.com',
  'v.redd.it',
  'streamable.com',
];

export function isMedia(post: Post): Boolean {
  if (!post.post_hint || !post.domain || !mediaDomains.includes(post.domain)) {
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

// Types of posts
// * Plain Text
// * Image
// * GIF
// * Video
// * Embed
// * Link

export function isStringURL(url: string) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(url);
}

export function isVideo(post: Post) {
  return videoDomains.includes(post.domain);
}
