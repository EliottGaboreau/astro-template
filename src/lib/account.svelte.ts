import type { Product } from "@lib/types";

const PUBLIC_PAYLOAD_API_URL = import.meta.env.PUBLIC_PAYLOAD_API_URL

export interface Item {
    product: number | Product;
    quantity: number;
    price: number;
};

let account = $state({});

export function getAccount() {

    $effect(() => {
        console.log("Load")
        const localValue = localStorage.getItem('account')
        if (localValue)
            account = JSON.parse(localValue)
    })


    $effect(() => {
        console.log("Set")
        localStorage.setItem('account', JSON.stringify(account || {}))
    })

    async function fetchMe() {
        const response = await fetch(`${PUBLIC_PAYLOAD_API_URL}/customers/me`, {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(r => r.json())

        account = response.user;
    }

    async function createAccount(email: string, password: string, organisation_id) {
        return fetch(`${PUBLIC_PAYLOAD_API_URL}/customers`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "accept-language": "fr",
            },
            body: JSON.stringify({ email, password, organization: organisation_id }),
        }).then(r => r.json());
    }


    async function login(email: string, password: string) {
        const response = await fetch(
            `${PUBLIC_PAYLOAD_API_URL}/customers/login`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "accept-language": "fr",
                },
                body: JSON.stringify({ email, password }),
            },
        ).then(r => r.json())

        account = response.user;
        return response
    }


    const isLoggedIn = $derived(Boolean(account && account?.email))

    return {
        get account() {
            return account
        },
        createAccount,
        fetchMe,
        login,
        isLoggedIn,
    }
}
