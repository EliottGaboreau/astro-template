<script>
    import { getOrder } from "../../lib/order.svelte";

    let { product } = $props();

    let { items, addItem } = getOrder();

    function handleClick() {
        addItem(product);
    }
</script>

<button onclick={handleClick}>
    {product.title}
</button>
