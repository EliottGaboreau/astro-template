<script>
    import { getOrder } from "@lib/order.svelte";

    let { product } = $props();

    let { items, addItem } = getOrder();

    function handleClick() {
        addItem(product);
    }
</script>

<button
    class="ring-inset p-1 ring-1 ring-gray-900 rounded-md hover:bg-gray-200 transition-colors"
    onclick={handleClick}
>
    {product.title}
</button>
