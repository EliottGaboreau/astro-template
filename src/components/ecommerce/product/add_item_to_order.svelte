<script>
    import { getOrder } from "@lib/order.svelte";
    import {Check} from "svelte-lucide";

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
    
<div class="inline-block">
    <button
        class="py-1 px-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors"
        onclick={handleClick}
        >
        Ajouter au panier
    </button>
</div>
{:else}
<div class="bg-green-200 rounded-xl ring-offset-2 ring-offset-green-500 text-green-500 p-1.5 m-1">
    <div class="p-1.5 outline-green-400 outline outline-2 rounded-lg">
        <Check class="inline-block "/>
        Ajouté au panier avec succès
    </div>
</div>
<div class="flex flex-row">
    <a class="m-1 py-1 px-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors" href="/cart">Voir le Panier</a>
    <a class="m-1 py-1 px-3 rounded-full ring-inset ring-1 ring-gray-900 hover:bg-gray-200 transition-colors" href="/products">Continuer</a>
</div>
{/if}

