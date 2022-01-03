const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async (config) => {
        config.resolve.modules.push(toPath('src'));

        config.resolve.alias['@emotion/core'] = toPath(
            'node_modules/@emotion/react'
        );

        config.resolve.alias['@emotion/styled'] = toPath(
            'node_modules/@emotion/styled'
        );

        config.resolve.alias['emotion-theming'] = toPath(
            'node_modules/@emotion/react'
        );

        return config;
    }
};
