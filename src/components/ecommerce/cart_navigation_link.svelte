<script>
    import { getOrder } from "@lib/order.svelte";

    let order = getOrder();

    order.fetchOrder();
</script>

<a href="/cart">
    <h2 class="sm:text-lg md:text-xl p-2">
        Panier ({order.items.reduce(
            (accumulator, item) => accumulator + item.quantity,
            0,
        )})
    </h2>
</a>
