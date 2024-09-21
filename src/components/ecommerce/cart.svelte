<script>
    import { getOrder } from "../../lib/order.svelte";

    let order = getOrder();
    $inspect(order);

    const images = import.meta.glob("/src/assets/*.{webp,jpeg,jpg,png,gif}");

    $inspect(images);
</script>

<div class="max-w-2xl m-auto">
    <h1 class="sm:text-4xl text-2xl">Votre panier</h1>
    {#each order.items as item}
        <div class="flex flex-row m-4 justify-around">
            {#await images["/src/assets/" + item.product.images[0].filename
                        .split(".")
                        .slice(0, -1)
                        .join(".") + ".webp"]() then image}
                <!-- <span>{JSON.stringify(image)}</span> -->
                <img src={image.default.src} alt="" />
            {/await}

            <span
                >{"/src/assets/" +
                    item.product.images[0].filename
                        .split(".")
                        .slice(0, -1)
                        .join(".") +
                    ".webp"}</span
            >
            <a href="/products/{item.product.slug}">{item.product.title}</a>
            <span>{item.quantity}</span>
        </div>
    {/each}
</div>
