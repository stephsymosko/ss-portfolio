module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist/apps/store',
    },
    upload: {
      target: '.lighthouseci',
    },
  },
};
