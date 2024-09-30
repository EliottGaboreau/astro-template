import type { Product } from "@lib/types";

const PUBLIC_PAYLOAD_API_URL = import.meta.env.PUBLIC_PAYLOAD_API_URL

export interface Item {
    product: number | Product;
    quantity: number;
    price: number;
};

let items = $state([]);

export function getOrder() {

    async function fetchOrder() {
        const response = await fetch(`${PUBLIC_PAYLOAD_API_URL}/get_current_order`, {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(r => r.json())

        items = response.items;
    }


    async function updateRemoteOrder() {
        const response = await fetch(`${PUBLIC_PAYLOAD_API_URL}/orders/update_orders_items`,
            {
                method: 'POST',
                body: JSON.stringify({ items: items }),
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            }
        ).then(r => r.json())

        items = response.items;

    }


    async function addItem(product: number | Product) {
        items.push({
            product: product,
            quantity: 1,
            price: typeof product === 'object' ? product.price : undefined,
        })
        updateRemoteOrder()
    }

    async function updateQuantity(index: number, new_quantity: number) {
        items[index].quantity = new_quantity;
        updateRemoteOrder()
    }


    async function removeItem(index: number) {
        items.slice(index, 1)
        updateRemoteOrder()
    }


    return {
        get items() {
            return items
        },
        fetchOrder,
        addItem,
        updateQuantity,
        removeItem,
    }
}
