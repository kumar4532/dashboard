module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/imgdownload',
        destination: 'https://testd5-img.azurewebsites.net/api/imgdownload',
      },
    ];
  },
  reactStrictMode: true,
};