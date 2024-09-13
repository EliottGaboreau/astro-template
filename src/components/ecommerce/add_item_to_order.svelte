<script>
    import { getOrder } from "../../lib/order.svelte";

    let { product } = $props();

    let { items, addItem } = getOrder();

    function handleClick() {
        addItem(product);
        // alert("Button Clicked");
    }
</script>

<button onclick={handleClick}>
    {product.title}
</button>
