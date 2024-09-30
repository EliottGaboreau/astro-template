<script>
    import { getOrder } from "@lib/order.svelte";
    import { ShoppingCart } from "svelte-lucide";

    let order = getOrder();

    let total_items = $derived(
        order.items.reduce(
            (accumulator, item) => accumulator + item.quantity,
            0,
        ),
    );

    order.fetchOrder();
</script>

<a href="/cart">
    <h2 class="sm:text-lg md:text-xl p-2 flex items-center">
        Panier
        <div class="inline-block m-2 relative">
            <ShoppingCart />
            {#if total_items > 0}
                <div
                    class=" absolute top-[-14px] left-1.5 bg-red-600 rounded-full px-1 pb-0.5 text-xs text-white"
                >
                    {total_items}
                </div>
            {/if}
        </div>
    </h2>
</a>
