import type { Product } from "../types";

const PUBLIC_PAYLOAD_API_URL = import.meta.env.PUBLIC_PAYLOAD_API_URL

interface Item {
    product: number | Product;
    quantity: number;
    price: number;
};

let items = $state([]);

export function getOrder() {

    async function fetchOrder() {
        console.log('----------------------------')
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

        $inspect(response.items)
        items = response.items;

    }


    async function addItem(product: number | Product) {
        let already_present = items.find((element) => productEquals(element.product, product));

        if (already_present) {
            already_present.quantity += 1
        } else {
            items.push({
                product: product,
                quantity: 1,
                price: typeof product === 'object' ? product.price : undefined,
            })
        }
        updateRemoteOrder()
    }

    return {
        get items() {
            return items
        },
        fetchOrder,
        addItem,
    }
}


function productEquals(left: number | Product, right: number | Product): boolean {
    const left_id = typeof left === 'number' ? left : left.id;
    const right_id = typeof right === 'number' ? right : right.id;
    return left_id === right_id
}