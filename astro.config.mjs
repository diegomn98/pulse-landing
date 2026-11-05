import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  output: 'static',
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Figtree',
      cssVariable: '--font-display',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: [
              '@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2',
            ],
            weight: '300 900',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
