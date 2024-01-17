module.exports = {
    apps : [
      {
        name: 'bff',
        script: 'dist/app.js',
        env: {
          NODE_ENV: 'production'
        }
      }
    ],
  };
