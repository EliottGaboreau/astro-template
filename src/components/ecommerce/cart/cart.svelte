<script>
    import { getOrder } from "@lib/order.svelte";
    import CartItem from "./cart_item.svelte";
    import SignupOrLogin from "@components/account/signup_or_login.svelte";

    let order = getOrder();

    let { product_thumbail_map } = $props();
</script>

<div class="max-w-4xl m-auto">
    <h1 class="sm:text-4xl text-2xl m-4">Votre panier</h1>
    <div class="flex flex-col md:flex-row">
        <div class="grow">
            {#each order.items as item, index}
                <CartItem
                    {order}
                    {index}
                    {item}
                    thumbnail={product_thumbail_map[item.product.id]}
                />
            {/each}
        </div>
        <div>
            <SignupOrLogin />
        </div>
    </div>
</div>
