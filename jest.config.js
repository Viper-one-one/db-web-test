const nextJestPreset = require('next/jest');

const createJestConfig = nextJestPreset({
    dir: './',
});

const customJestConfig = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

module.exports = createJestConfig(customJestConfig);