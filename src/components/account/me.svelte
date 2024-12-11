<script>
    import { getAccount } from "@lib/account.svelte";
    import SignupOrLogin from "./signup_or_login.svelte";

    let account = getAccount();

    account.fetchMe();

    $inspect(account);
</script>

<div>
    {#if account.isLoggedIn}
        <h1 class="text-2xl text-center m-4">S'identifier</h1>
        <SignupOrLogin />
    {:else}
        <p>Logged in as {account.account?.email}</p>
    {/if}
</div>
