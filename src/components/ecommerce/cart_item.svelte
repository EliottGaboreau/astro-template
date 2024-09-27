<script>
    let { order, index, item, thumbnail } = $props();

    let quantity = $state(item.quantity);
    let previous_quantity = $state(item.quantity);

    function validator(node, value) {
        return {
            update(value) {
                quantity =
                    value === null || quantity < node.min
                        ? previous_quantity
                        : parseInt(value);
                previous_quantity = quantity;

                order.updateQuantity(index, quantity);
            },
        };
    }
</script>

<div class="flex flex-row m-4 justify-around">
    <img src={thumbnail} alt="" />
    <a href="/products/{item.product.slug}">{item.product.title}</a>
    <button onclick={() => quantity--}>-</button>
    <input
        type="number"
        bind:value={quantity}
        step="1"
        min="1"
        use:validator={quantity}
    />
    <button onclick={() => quantity++}>+</button>
</div>
