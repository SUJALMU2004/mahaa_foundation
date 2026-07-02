import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

export function slugifyCategory(category: string): string {
  return category
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function getReadingTime(body: string): string {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export function getPublishedPosts(posts: BlogPost[]): BlogPost[] {
  return posts.filter((post) => !post.data.draft);
}

export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
  );
}

export function getRelatedPosts(
  posts: BlogPost[],
  currentSlug: string,
  category: string,
  limit = 3,
): BlogPost[] {
  const publishedPosts = sortPostsByDate(getPublishedPosts(posts)).filter(
    (post) => post.id !== currentSlug,
  );
  const sameCategory = publishedPosts.filter((post) => post.data.category === category);
  const fallback = publishedPosts.filter((post) => post.data.category !== category);

  return [...sameCategory, ...fallback].slice(0, limit);
}

export function getCategories(posts: BlogPost[]): string[] {
  return Array.from(new Set(getPublishedPosts(posts).map((post) => post.data.category))).sort();
}
