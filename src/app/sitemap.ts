import { MetadataRoute } from 'next';

import { allReadableBlogs } from '@/utils/blogs';

const allBlogs = allReadableBlogs.filter((it) => !Boolean(it.link));

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = allBlogs.map((post) => ({
    url: `${post.slug}`,
    lastModified: post.date.split('T')[0],
    priority: 0.6,
  }));

  const routes = ['', 'about', 'blog', 'projects', 'uses'].map((route) => ({
    url: `${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    priority: route ? 0.8 : 1,
  }));

  return [...routes, ...blogs].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0),
  );
}
