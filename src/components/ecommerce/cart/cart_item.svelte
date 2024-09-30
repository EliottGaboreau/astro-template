<script>
    import { Minus, Plus, Cross1 } from "svelte-radix";
    let { order, index, item, thumbnail } = $props();

    let quantity = $state(item.quantity);
    let previous_quantity = $state(item.quantity);

    function validator(node, value) {
        return {
            update(value) {
                quantity =
                    value === null || quantity < node.min || quantity > node.max
                        ? previous_quantity
                        : parseInt(value);
                previous_quantity = quantity;

                order.updateQuantity(index, quantity);
            },
        };
    }

    $effect(() => {
        quantity = item.quantity;
    });
</script>

<div class="flex flex-row m-4 justify-around items-center">
    <img src={thumbnail} alt="" />
    <a class="underline" href="/products/{item.product.slug}"
        >{item.product.title}</a
    >
    <div class="flex items-center">
        <button
            class="ring-inset p-1 ring-1 ring-gray-900 rounded-md hover:bg-gray-200 transition-colors"
            onclick={() => quantity--}><Minus size={20} /></button
        >
        <input
            class="outline-none w-[5ch] text-center"
            type="number"
            bind:value={quantity}
            step="1"
            min="1"
            max="999"
            use:validator={quantity}
        />
        <button
            class="ring-inset p-1 ring-1 ring-gray-900 rounded-md hover:bg-gray-200 transition-colors"
            onclick={() => quantity++}><Plus size={20} /></button
        >
    </div>

    <button
        class="p-2 hover:ring-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors"
        onclick={() => order.removeItem(index)}><Cross1 size={20} /></button
    >
</div>
