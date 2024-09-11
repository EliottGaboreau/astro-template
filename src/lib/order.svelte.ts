const PUBLIC_PAYLOAD_API_URL = import.meta.env.PUBLIC_PAYLOAD_API_URL


let items = $state([]);

export function getOrder() {

    async function fetchOrder() {
        const response = await fetch(`${PUBLIC_PAYLOAD_API_URL}/ping`).then(r => r.json())

        items = response.items;
    }

    return {
        get items() {
            return items
        },
        fetchOrder
    }
}