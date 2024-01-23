<script>
    import "../app.css";
    import Logo from "../components/Logo.svelte";
</script>

<div class="lg:w-content w-full mx-auto p-8 sm:px-6">
    <header>
        <div class="container flex justify-between">
            <a href="/">
                <Logo />
            </a>
        </div>
    </header>

    <slot />

    <footer>
        <div class="container mt-40">
            <a href="/">
                <Logo />
            </a>
        </div>
    </footer>
</div>
