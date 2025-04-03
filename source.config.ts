import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/codex',
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
