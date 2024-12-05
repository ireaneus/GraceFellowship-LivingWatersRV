import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  content: {
    collections: {
      sermons: {
        type: 'content',
        schema: {
          title: 'string',
          date: 'date',
          speaker: 'string',
          description: 'string',
        },
      },
      blog: {
        type: 'content',
        schema: {
          title: 'string',
          date: 'date',
          author: 'string',
          excerpt: 'string',
        },
      },
    },
  },
});