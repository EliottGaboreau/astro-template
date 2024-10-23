<script>
    let { events } = $props();
    import EventRow from "./event_row.svelte";

    $inspect(events);
</script>

<div class="max-w-6xl m-auto">
    <h1 class="font-display text-5xl px-4 pt-4">Titre</h1>

    <div class="m-4">
        <table class="sm:w-full table-fixed">
            <tbody>
                {#each events as event}
                    <EventRow {...event} />
                {/each}
            </tbody>
        </table>
    </div>
</div>
