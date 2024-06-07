import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './'
});

const config = {
    modulePaths: ['<rootDir>/src'],
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/coverage/**',
        '!**/*.type.ts',
        '!<rootDir>/.next/**',
        '!<rootDir>/*.config.{js,mjs,ts}',
        '!<rootDir>/src/app/api/**',
        '!<rootDir>/src/lib/**',
        '!<rootDir>/src/middlewares/**',
        '!<rootDir>/src/middleware.ts'
    ],
    testEnvironment: 'jest-environment-jsdom'
};

export default createJestConfig(config);
