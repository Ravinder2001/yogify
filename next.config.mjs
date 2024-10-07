/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};

// Export the combined configuration
export default withVideos(nextConfig);
