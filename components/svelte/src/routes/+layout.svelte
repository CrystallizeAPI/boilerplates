<script>
    import "../app.css";
    import Logo from "../components/Logo.svelte";
    import CrystallizeLogo from "../components/CrystallizeLogo.svelte";
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
          <div class="flex mt-10  w-full text-center justify-end">
            <div class="flex items-center gap-1 mt-10">
              <CrystallizeLogo />
              Powered by <a href="https://crystallize.com" class="underline">
                Crystallize</a
              > + <a href="https://svelte.dev/" class="underline">Svelte</a>
            </div>
          </div>
        </div>
    </footer>
</div>
