<script>
    import { getOrder } from "../../lib/order.svelte";
    import CartItem from "./cart_item.svelte";

    let order = getOrder();

    let { product_thumbail_map } = $props();
</script>

<div class="max-w-2xl m-auto">
    <h1 class="sm:text-4xl text-2xl">Votre panier</h1>
    {#each order.items as item, index}
        <CartItem
            {order}
            {index}
            {item}
            thumbnail={product_thumbail_map[item.product.id]}
        />
    {/each}
    <!-- onchange={(value) => order.updateQuantity(index, value)} -->
</div>
