module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    collect: {
      staticDistDir: './dist',
      url: [
        'http://localhost/',
        'http://localhost/articles/',
        'http://localhost/code-projects/',
      ],
    },
  },
}
