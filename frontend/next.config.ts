import type { NextConfig } from "next";
import * as dotenv from "dotenv";
import * as path from "path";

// Load environment variables from root .env file
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
    };
    return config;
  },
  transpilePackages: ['../backend'],
};

export default nextConfig;
