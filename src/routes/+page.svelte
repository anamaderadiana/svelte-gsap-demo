<Header />

{#each data.content.sections as section}
<section>
    <div class="split">
        <Slider slides={section.slides} />
    </div>

    <div class="split">
        <div class="info">
            <h2> {section.title}</h2>
            <p>{section.description}</p>
            <p> <Button /> </p>
        </div>
    </div>
</section>
{/each}

<script lang="ts">
    import Slider from '$lib/components/slider.svelte'
    import Header from '$lib/components/header.svelte'
    import Button from '$lib/components/button.svelte'
    import '../global.css'

    export let data;
</script>

<style>
    section {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 100vh;
        grid-auto-flow: dense;
    }

    .reverse .split:first-child {
        order: 1;
    }

    .reverse .split:last-child {
        order: -1;
    }

    section div.split {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    section div.split:first-child {
        background-color: #111111;
    }

    section div.info {
        padding: 32px;
        max-width: 480px;
    }

    section div.info h2 {
        font-size: 32px;
    }

    section div.info p {
        margin: 32px 0 0;
    }

    @media (max-width: 1080px) {
        section {
            display: block;
        }

        .split {
            padding: 64px 0;
        }
    }
</style>
