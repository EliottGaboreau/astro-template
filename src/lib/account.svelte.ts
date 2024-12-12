import type { Product } from "@lib/types";

const PUBLIC_PAYLOAD_API_URL = import.meta.env.PUBLIC_PAYLOAD_API_URL

export interface Item {
    product: number | Product;
    quantity: number;
    price: number;
};

let account = $state({});
let loaded = $state(false)

const isLoggedIn = $derived(
    Boolean(account && account?.email),
);


export function getAccount() {

    $effect(() => {
        console.log("Load")
        const localValue = localStorage.getItem('account')
        if (localValue)
            account = JSON.parse(localValue)
        loaded = true
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


    async function logout() {
        const response = await fetch(
            `${PUBLIC_PAYLOAD_API_URL}/customers/logout`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "accept-language": "fr",
                },
            },
        ).then(r => r.json())

        if (response.message) {
            account = {};
        }

        return response
    }



    return {
        get account() {
            return account
        },
        get loaded() {
            return loaded
        },
        get isLoggedIn() {
            return isLoggedIn
        },
        createAccount,
        fetchMe,
        login,
        logout,
    }
}
