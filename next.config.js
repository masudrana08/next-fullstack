/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] },
    webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true };
        return config;
    },
    env: {
        SERVER:process.env.SERVER
    }
}

module.exports = nextConfig
