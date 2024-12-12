<script>
    import { getAccount } from "@lib/account.svelte";
    import SignupOrLogin from "./signup_or_login.svelte";
    import { LogOut } from "svelte-lucide";

    let account = getAccount();

    account.fetchMe();

    $inspect(account);

    async function logout() {
        await account.logout();
    }
</script>

<div>
    {#if account.loaded}
        {#if !account.isLoggedIn}
            <h1 class="text-2xl text-center m-4">S'identifier</h1>
            <SignupOrLogin />
        {:else}
            <p>Logged in as {account.account?.email}</p>

            <button
                onclick={logout}
                class="p-2 text-red-600 ring ring-red-600 rounded-md hover:bg-red-600 hover:text-white transition-colors"
            >
                <LogOut class="inline-block" />
                Se déconnecter
            </button>
        {/if}
    {/if}
</div>
