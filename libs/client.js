import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    "serviceDomain": "nextjs-turtorial-blog",
    "apiKey": process.env.API_KEY,
});