<header bind:this={header}>
    <h1 class="header__title">
        <span class="header__label">🐶 Good Dogs 🐶</span>
    </h1>
    <h2 class="header__subtitle">
        <span class="header__label">Long walks, short distances</span>
    </h2>
</header>

<script lang="ts">
    import { onMount } from 'svelte'
    import gsap from 'gsap'

    let header: HTMLElement

    onMount(() => {
        const title = header.querySelector('.header__title')
        const subtitle = header.querySelector('.header__subtitle')

        if (title) initScrollingText(title)
        if (subtitle) initScrollingText(subtitle)

        const fadeInTimeline = gsap.timeline()

        fadeInTimeline
            .set([title, subtitle], { opacity: 0 })
            .to([title, subtitle], { opacity: 1, delay: 1, stagger: 1, duration: 3 })
    })

    const initScrollingText = (target: Element) => {
        const content = target?.querySelector('span')
        const contentWidth = content?.clientWidth
        const amount = 10

        if (content) {
            for (let i = 0; i < amount; i++) {
                target?.appendChild(content.cloneNode(true))
            }
        }

        const movementTimeline = gsap.timeline({ repeat: -1 })
        
        movementTimeline
            .set(target, { x: 0})
            .to(target, { x: (contentWidth || 0) * -1, duration: 6, ease: 'linear' })
    }
</script>

<style>
    header {
        position: fixed;
        top: 8px;
        left: 0px;
        right: 0px;
        z-index: 1000000000;
        overflow: hidden;
        font-size: 16px;
        font-variation-settings: "wght" 800;
    }

    .header__title,
    .header__subtitle {
        display: flex;
    }

    :global(.header__label) {
        display: inline-block;
        width: 260px;
        flex: 0 0 auto;
    }

    :global(.header__subtitle > .header__label) {
        width: 250px;
    }
</style>