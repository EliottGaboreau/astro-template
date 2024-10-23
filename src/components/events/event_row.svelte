<script>
    import { format } from "date-fns";
    import { fr } from "date-fns/locale";
    let {
        title,
        date,
        page,
        address,
        details,
        link,
        link_text,
        mobileHidden = false,
    } = $props();

    $inspect(format(date, "cccc d LLLL, p", { locale: fr }));
</script>

<tr
    class={`${mobileHidden ? "hidden sm:table-row" : ""} border-b border-black p-2 flex flex-col sm:table-row justify-between sm:items-center`}
>
    <td
        class="sm:text-center text-xl font-display p-1 sm:p-4 text-primary underline"
    >
        {#if page}
            <a href={`/${page.slug}`}>
                {page.title}
            </a>
        {:else}
            <h2>{title}</h2>
        {/if}
    </td>
    <td colspan="2" class="font-bold text-xl capitalize"
        >{format(date, "cccc d LLLL, p", { locale: fr })}</td
    >
    <td colspan="2">
        <p class="text-lg">{address}</p>
        <p class="text-sm">{details}</p>
    </td>
    {#if link && link_text}
        <td class="my-2 sm:m-2 sm:text-center">
            <a
                href={link}
                class="p-2 font-display text-white bg-primary rounded-full"
            >
                {link_text}
            </a>
        </td>
    {:else}{/if}
</tr>
