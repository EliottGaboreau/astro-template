import qs from "qs";

const LIMIT = 100


export async function getAllDocs(slug: string, params: any) {
    let docs: any[] = [];
    let has_next_page = true;

    params.limit = LIMIT;

    while (has_next_page) {

        const response = await fetch(
            `${import.meta.env.PUBLIC_PAYLOAD_API_URL}/${slug}${qs.stringify(params, { addQueryPrefix: true })}`,
            {
                headers: {
                    Authorization: `users API-Key ${import.meta.env.PAYLOAD_API_TOKEN}`,
                },
            },
        ).then((r) => r.json());

        has_next_page = response.hasNextPage;

        params.page = response.nextPage
        docs = docs.concat(response.docs);
    }
    return docs;
}
