<script lang="ts">
    const PUBLIC_PAYLOAD_API_URL = import.meta.env.PUBLIC_PAYLOAD_API_URL;

    import { getAccount } from "@lib/account.svelte";

    let account = getAccount();

    $inspect(account);

    let responseMessage: string = $state("");
    let errors = $state({});
    let sending: boolean = $state(false);
    async function submit(e: SubmitEvent) {
        e.preventDefault();
        sending = true;
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const request_data = Object.fromEntries(formData);

        const data = await account.login(
            request_data.email,
            request_data.password,
        );

        console.log("tried loggin in, result", data);

        responseMessage = data.message;
        if (responseMessage) {
            console.log("Logged in, redirecting");
            window.location.href = "/account";
        }
        errors = {};
        data.errors?.map((e) => e.map((d) => (errors[d?.path] = d?.message)));
    }
</script>

<form onsubmit={submit} class="max-w-lg m-auto">
    <label class="block font-semibold">
        Email
        <input
            class="mt-1 block w-full rounded-full border-2 border-black px-4 p-2"
            type="email"
            name="email"
            required
        />
        {#if errors.email}
            <p class="text-red-700 text-sm">{errors.email}</p>
        {/if}
    </label>
    <label class="block font-semibold">
        Password :
        <input
            class="mt-1 block w-full rounded-full border-2 border-black px-4 p-2"
            type="password"
            name="password"
            required
        />
        {#if errors.password}
            <p class="text-red-700 text-sm">{errors.password}</p>
        {/if}
    </label>
    <button
        type="submit"
        class="py-2 my-4 w-full block font-semibold rounded-full p-2 ml-full bg-sky-600 text-white"
    >
        Se connecter
    </button>
</form>
