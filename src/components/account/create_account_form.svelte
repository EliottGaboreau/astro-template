<script lang="ts">
    import zxcvbn from "zxcvbn";

    const PUBLIC_PAYLOAD_API_URL = import.meta.env.PUBLIC_PAYLOAD_API_URL;
    const PUBLIC_PAYLOAD_ORGANIZATION_ID = import.meta.env
        .PUBLIC_PAYLOAD_ORGANIZATION_ID;

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

        const data = await account.createAccount(
            request_data.email,
            request_data.password,
            PUBLIC_PAYLOAD_ORGANIZATION_ID,
        );

        responseMessage = data.message;

        if (responseMessage) {
            await account.login(request_data.email, request_data.password);
            window.location.href = "/account";
        }
        errors = {};
        data.errors?.map((e) =>
            e.data?.map((d) => (errors[d?.field] = d?.message)),
        );
    }

    let password = $state("");
    let password_strength = $derived(zxcvbn(password).score);

    let strengh_config = {
        0: {
            color: "bg-red-700",
            text_color: "text-red-700",
            label: "Trop faible",
            length: "w-1/5",
        },
        1: {
            color: "bg-orange-500",
            text_color: "text-orange-500",
            label: "Faible",
            length: "w-2/5",
        },
        2: {
            color: "bg-amber-400",
            text_color: "text-amber-400",
            label: "Moyen",
            length: "w-3/5",
        },
        3: {
            color: "bg-green-400",
            text_color: "text-green-400",
            label: "Sûr",
            length: "w-4/5",
        },
        4: {
            color: "bg-green-800",
            text_color: "text-green-800",
            label: "Très sûr",
            length: "w-full",
        },
    };
</script>

<form onsubmit={submit} class="max-w-lg m-auto">
    {#if responseMessage}
        <div>Compte créé avec succes, vous allez être redirigé</div>
    {:else}
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
                bind:value={password}
                required
            />
        </label>
        {#if password}
            <div
                class={`${strengh_config[password_strength].length} py-1 mt-2 ${strengh_config[password_strength].color} rounded-full`}
            ></div>
            <p
                class={`block font-semibold ${strengh_config[password_strength].text_color}`}
            >
                {strengh_config[password_strength].label}
            </p>
        {/if}
        <button
            type="submit"
            class="py-2 my-4 w-full block font-semibold rounded-full p-2 ml-full bg-sky-600 text-white"
        >
            Créer un compte
        </button>
    {/if}
    <p>
        Vous avez déjà un compte ? <a href="/account/log_in">Connectez-vous</a>
    </p>
</form>
