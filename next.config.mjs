/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "images.pexels.com", "plus.unsplash.com", "res.cloudinary.com"],
  },
};

// Export the combined configuration
export default withVideos(nextConfig);
