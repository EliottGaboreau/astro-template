import { config } from 'dotenv'
import { getCachedImage } from '../lib/image_cache.ts';

config()


import.meta.env = process.env




const params = new URLSearchParams({
    limit: "100",
});

const response = await fetch(
    `${import.meta.env.PUBLIC_PAYLOAD_API_URL}/images?${params}`,
    {
        headers: {
            Authorization: `users API-Key ${import.meta.env.PAYLOAD_API_TOKEN}`,
        },
    },
).then((r) => r.json());


await Promise.all(response.docs.map((image) => getCachedImage(image)));
