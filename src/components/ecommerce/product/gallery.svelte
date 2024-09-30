<script>
    import PhotoSwipeLightbox from "photoswipe/lightbox";

    let { images } = $props();

    let main_image_index = $state(0);
    let main_image_loaded = $state(false);

    $effect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: ".gallery-container",
            children: "a",
            pswpModule: () => import("photoswipe"),
        });
        lightbox.init();
    });
</script>

<div class="gallery-container">
    <a
        href={images[main_image_index].src}
        class="m-1 md:m-2 block relative overflow-hidden"
        data-pswp-width={images[main_image_index].width}
        data-pswp-height={images[main_image_index].height}
        aria-label="Image detail"
        data-pswp-srcset={images[main_image_index].srcSet.attribute}
        target="_blank"
    >
        <img
            aria-hidden={true}
            alt=""
            class="absolute inset-0 w-full h-full transform scale-150 filter blur-2xl z-[-1] placeholder-image"
            src={images[0].base64}
        />
        <img
            src={images[main_image_index].src}
            alt={images[main_image_index].alt || ""}
            width={images[main_image_index].width}
            height={images[main_image_index].height}
            class={`opacity-${main_image_loaded ? 100 : 0} transition-opacity duration-200 ease-in-out`}
            onload={() => {
                main_image_loaded = true;
            }}
        />
    </a>
    <div>
        {#each images as image, index}
            <button
                aria-label="Image {index}"
                onclick={() => {
                    main_image_index = index;
                }}
            >
                <img src={image.thumbnail} alt={image.alt || ""} />
            </button>
        {/each}
    </div>
    <!-- <div>
        {
            processed_images.slice(1).map((processed_image) => <Picture
                src={astro_images[processed_image.url]()}
                format="webp"
                fallbackFormat="jpg"
                class="opacity-0 transition-opacity duration-200 ease-in-out"
                widths={[360, 540, 720, 1200, 1600, upload.width]}
                sizes="50vw"
                inferSize
                alt={upload.alt || ""}
                onload={"const t = event.target; setTimeout(() => {console.log(t); t.parentElement.previousElementSibling.remove()}, 300); this.style.opacity = 1;"}
            />)
        }
    </div> -->
</div>
