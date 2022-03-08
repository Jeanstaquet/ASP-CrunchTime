module.exports = {
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'no-mixed-spaces-and-tabs': 0,
        'react/no-unescaped-entities': 0,
        'react/prop-types': 0,
    },
}
