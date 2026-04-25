/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    // ลบ @storybook/addon-styling-webpack ออกจากตรงนี้
  ],
  framework: {
    name: "@storybook/react-vite", // ใช้เป็น Object เพื่อความเสถียร
    options: {},
  },
};

export default config;
