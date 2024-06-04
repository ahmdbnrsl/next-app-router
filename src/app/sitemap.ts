import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://next-app-router-gamma.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1
        },
        {
            url: 'https://next-app-router-gamma.vercel.app/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'https://next-app-router-gamma.vercel.app/product',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5
        }
    ];
}
