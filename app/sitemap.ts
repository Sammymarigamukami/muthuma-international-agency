import { products } from "@/lib/data"


export default async function sitemap() {

    const product = products.slice(0, 10);

    const productUrls = product.map((product) => ({
        url: `${process.env.BASE_URL}/products/${product.category?.toLowerCase()}/${product.name}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
    }));


    const mainPages = [
        {
            url: `${process.env.BASE_URL}/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${process.env.BASE_URL}/blogs`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${process.env.BASE_URL}/products`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${process.env.BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        }
    ];
    return [...mainPages, ...productUrls];
}