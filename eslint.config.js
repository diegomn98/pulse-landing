import { defineConfig } from 'eslint/config';
import astro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default defineConfig([
  { ignores: ['dist/', '.astro/'] },
  tseslint.configs.strict,
  astro.configs.recommended,
  { rules: { 'no-console': 'error' } },
]);
