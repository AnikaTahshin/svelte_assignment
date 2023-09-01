<script>
  import "../app.css";
</script>

<slot />

<main class="grid lg:grid-cols-2 sm:grid-cols-1 box-border h-screen">
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
      <div class="flex justify-center items-center bg-yellow-100 box-border">
        <div class=" flex justify-center items-center">
          <div
            class="bg-[#293462] box-border h-[300px] w-[300px] flex justify-center items-center"
          >
            <div
              id="circle"
              class="bg-yellow-100 overflow-hidden relative h-[200px] w-[200px] rounded-full flex justify-center items-center"
            >
              <div class="right-tri" />
              <div class="left-tri" />
            </div>
          </div>
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

  .right-tri {
    width: 0;
    height: 0;
    border-bottom: 200px solid #fe5f55;
    border-right: 200px solid transparent;
    border-left: 200px solid transparent;
    position: absolute;
    top: 60px;
    left: -59px;
  }
  .left-tri {
    width: 0;
    height: 0;
    border-bottom: 100px solid #fe5f55;
    border-right: 100px solid transparent;
    border-left: 100px solid transparent;
    position: absolute;
    top: 130px;
    left: -70px;
  }
</style>
