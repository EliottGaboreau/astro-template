<script>
    import { getOrder } from "@lib/order.svelte";

    let { product } = $props();

    let waiting = $state(false)
    let success = $state(false)

    let { items, addItem } = getOrder();

    function handleClick() {
        waiting = true
        addItem(product);
        success = true
    }
</script>

{#if !success}
    
<button
    class="ring-inset p-1 ring-1 ring-gray-900 rounded-md hover:bg-gray-200 transition-colors"
    onclick={handleClick}
    >
    {product.title}
</button>
{:else}
<p>success</p>
{/if}

