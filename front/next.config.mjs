/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.apple.com',
            },
            {
                protocol: 'https',
                hostname: 'armoto.vtexassets.com',
            },
            {
                protocol: 'https',
                hostname: 'todoapplecaba.com.ar',
            },
            {
                protocol: 'https',
                hostname: 'playroomonline.com.ar',
            },
            {
                protocol: 'https',
                hostname: 'icenter.ar',
            },
            {
                protocol: 'https',
                hostname: 'outtec.com.ar',
            },
            {
                protocol: 'https',
                hostname: 'www.macstation.com.ar',
            },
            {
                protocol: 'https',
                hostname: 'acdn.mitiendanube.com',
            },
        ],
    },
};

export default nextConfig;
