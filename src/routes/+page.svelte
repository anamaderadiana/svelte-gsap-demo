<Header />

<section>
    <div class="split">
        <Slider slides={waitingSlides} />
    </div>

    <div class="split">
        <div class="info">
            <h2>
                Dogs and waiting
            </h2>
            <p>
                Dogs are experts at waiting.
                By the door, at the corner of the street, under the table while nothing happens.
                This piece looks at the quiet moments we rarely photograph — the pauses where companionship is most visible.
            </p>
            <p>
                <Button />
            </p>
        </div>
    </div>
</section>

<section class="reverse">
    <div class="split">
        <Slider slides={learningSlides} />
    </div>

    <div class="split">
        <div class="info">
            <h2>
                Learning the pace
            </h2>
            <p>
                Walking with a dog means adjusting your rhythm.
                Stops are frequent. Detours are mandatory. Progress is slow — and somehow better for it.
                A small reflection on how dogs gently reshape our sense of time.
            </p>
            <p>
                <Button />
            </p>
        </div>
    </div>
</section>

<script lang="ts">
    import Slider from '$lib/components/slider.svelte'
    import Header from '$lib/components/header.svelte'
    import Button from '$lib/components/button.svelte'
    import '../global.css'

    const waitingSlides = [
        {
            src: 'images/waiting-1.jpg',
            alt: 'Border collie waiting'
        },
        {
            src: 'images/waiting-2.jpg',
            alt: 'Dog waiting by the window'
        },
        {
            src: 'images/waiting-3.jpg',
            alt: 'A cute dog lying over grass'
        },
        {
            src: 'images/waiting-4.jpg',
            alt: 'Good boy waiting for food'
        }
    ]

    const learningSlides = [
        {
            src: 'images/learning-1.jpg',
            alt: 'sweaters 1'
        },
        {
            src: 'images/learning-2.jpg',
            alt: 'sweaters 2'
        },
        {
            src: 'images/learning-3.jpg',
            alt: 'sweaters 3'
        },
        {
            src: 'images/learning-4.jpg',
            alt: 'sweaters 4'
        }
    ]
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
