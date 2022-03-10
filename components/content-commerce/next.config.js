module.exports = {
  async rewrites() {
    return [
      {
        source: "/stories/:path*",
        has: [
          {
            type: "cookie",
            key: "authorized",
            value: "true",
          },
        ],
        destination: "/stories/:path*-_-_-exclusive",
      },
    ];
  },
};
