import { defineConfig, devices } from '@playwright/test';

const previewUrl = 'http://localhost:4322';

const viewports = [
  { width: 375, height: 812 },
  { width: 390, height: 844 },
  { width: 834, height: 1194 },
  { width: 1440, height: 900 },
];

const browsers = [
  { name: 'chromium', device: devices['Desktop Chrome'] },
  { name: 'webkit', device: devices['Desktop Safari'] },
];

export default defineConfig({
  testDir: 'e2e',
  fullyParallel: true,
  use: {
    baseURL: previewUrl,
  },
  projects: browsers.flatMap(({ name, device }) =>
    viewports.map((viewport) => ({
      name: `${name}-${viewport.width}`,
      use: { ...device, viewport },
    })),
  ),
  webServer: {
    command: 'npm run build && npm run preview -- --port 4322',
    url: previewUrl,
    reuseExistingServer: false,
  },
});
