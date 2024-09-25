<script>
    import { getOrder } from "../../lib/order.svelte";

    let order = getOrder();

    let { product_thumbail_map } = $props();
</script>

<div class="max-w-2xl m-auto">
    <h1 class="sm:text-4xl text-2xl">Votre panier</h1>
    {#each order.items as item}
        <div class="flex flex-row m-4 justify-around">
            <img src={product_thumbail_map[item.product.id]} alt="" />
            <a href="/products/{item.product.slug}">{item.product.title}</a>
            <span>{item.quantity}</span>
        </div>
    {/each}
</div>
