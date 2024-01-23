<script>
    /* @type { import('./$houdini').PageData } */
    export let data;
    $: ({ FrontPageGrid } = data);
</script>

<svelte:head>
    <title>Crystallize SvelteKit demo</title>
    <meta
        name="description"
        content="Crystallize demo with SvelteKit, Houdini and Tailwind."
    />
</svelte:head>

{#if !$FrontPageGrid.fetching}
    <div class="py-20">
        <div
            class="bg-background5 z-0 absolute left-0 right-0 bottom-0 rounded-tl-full rounded-tr-full"
        />
        <div
            class="grid grid-rows-auto gap-5 grid-flow-row"
            style="grid-template-columns: repeat(3, 1fr); max-width: 800px"
        >
            {#each $FrontPageGrid.data?.grid.rows as row}
                {#each row.columns as col}
                    <div
                        style="grid-column:span {col.layout
                            .colspan}; grid-row:span 1;"
                    >
                        <div
                            class="flex justify-between items-center w-full flex-row flex-wrap px-5 bg-background1 h-80 p-5 rounded-xl"
                        >
                            <div class="grow-1">
                                {#if col.item.topics}
                                    <div class="flex gap-1 mt-2">
                                        {#each col.item.topics as topic}
                                            <div
                                                class="text-sm py-1 rounded-2xl"
                                            >
                                                {topic.name}
                                            </div>
                                        {/each}
                                    </div>
                                {/if}
                                <h2 class="text-xl font-bold">
                                    <a href={col.item.path}>{col.item.name}</a>
                                </h2>
                                <p class="mt-2">
                                    ${col.item.defaultVariant.price}
                                </p>
                            </div>
                            <img
                                class="w-full max-w-[400px]"
                                alt={col.item.defaultVariant.firstImage.altText}
                                src={col.item.defaultVariant.firstImage.url}
                            />
                        </div>
                    </div>
                {/each}
            {/each}
        </div>
    </div>
{/if}
