module.exports = {
  ci: {
    collect: {
      staticDistDir: './apps/store/src/*',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
