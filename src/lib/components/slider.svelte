<button
    class="slides"
    aria-roledescription="carousel"
    aria-label="Interactive carousel of images"
    bind:this={slider}
    on:click={handleSlideClick}
>
    {#each slides as slide} 
        <img
            src={slide.src}
            alt={slide.alt}
            class="slides__img"
        >
    {/each}
</button>

<script lang="ts">
    import { onMount } from 'svelte'
    import gsap from 'gsap'

    interface slideType {
        src: string,
        alt: string
    }
    export let slides: slideType[]

    let images: Array<HTMLElement> = [];
    let slider: HTMLElement;
    let zIndex = 1000000
    let currentSlide = 0

    onMount(() => {
        images = [...slider.querySelectorAll<HTMLElement>('.slides__img')]
        images.forEach(image => {
            zIndex -= 1
            image.style.zIndex = `${zIndex}`
        })

        gsap.set(images, { opacity: 0 })

        const timeline = gsap.timeline()

        timeline
            .set(images, { x: () => 500 * Math.random() -250, y: "500%", rotation: () => 90 * Math.random() - 45, opacity: 1 })
            .to(images, { x: 0, y: 0, stagger: -0.25 })
            .to(images, { rotation: () => 16 * Math.random() - 8 })
    })

    const handleSlideClick = () => {
        zIndex -= 1
        let direction = '150%'
        let angle = 15
        const currentImg = images[currentSlide]
        const flipTimeline = gsap.timeline()

        if (Math.random() > 0.5) {
            direction = '-150%'
            angle = -15
        } else {
            direction = '150%'
            angle = 15
        }

        flipTimeline
            .set(currentImg, { x: 0})
            .to(currentImg, { x: direction, rotation: angle, rotationY: 90, scale: 1.1 })
            .set(currentImg, { zIndex: zIndex })
            .to(currentImg, { x: 0, rotation: () => 16 * Math.random() - 8, rotationY: 0, scale: 1 })

        currentSlide += 1
        currentSlide = currentSlide % images.length
    }
</script>

<style>
    .slides {
        position: relative;
        width: 500px;
        height: 750px;
        border: none;
        background-color: transparent;
        perspective: 800px;
    }

    .slides__img {
        position: absolute;
        top: 0;
        left: 0;
        width: 500px;
        height: 750px;
        box-shadow: 0 0 30px rgba(0, 0, 0, .25)
    }


    @media (max-width: 700px) {
        .slides,
        .slides__img {
            width: 80vw;
            height: 120vw;
        }
    }
</style>