<script>
  import "../app.css";
</script>

<slot />

<main class="grid grid-cols-2 box-border h-screen">
  <div class="grid grid-rows-2 box-border">
    <div class="grid grid-cols-2">
      <div class="grid grid-rows-2">
        <div class="bg-blue-400 box-border" />
        <div class="bg-teal-400 box-border" />
      </div>
      <div class="bg-rose-100 box-border" />
    </div>
    <div class="bg-fuchsia-400 box-border" />
  </div>

  <div class="grid grid-rows-2 box-border">
    <div class="bg-blue-400 box-border" />
    <div class="grid grid-cols-2 box-border">
      <div class="bg-yellow-100 box-border">
        <div class="grid grid-cols-2 place-items-center">
          <div class="bg-orange-500 box-border"><p>ani</p></div>
        </div>
      </div>
      <div class="bg-emerald-400 box-border" />
    </div>
  </div>
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
