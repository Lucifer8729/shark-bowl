/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  env: {
    MONGO_URI:
      "mongodb+srv://sharkbowl:sharkbowl@cluster0.tu0vw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
};
