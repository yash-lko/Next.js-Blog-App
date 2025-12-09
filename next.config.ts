/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "upload.wikimedia.org",
      "encrypted-tbn0.gstatic.com",
      "pngimg.com",
      "blogger.googleusercontent.com",
      "media2.dev.to",                    // added
      "dev-to-uploads.s3.amazonaws.com"   // added
    ],
  },
};

module.exports = nextConfig;

