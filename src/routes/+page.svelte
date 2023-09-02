<script>
  import "../app.css";
</script>

<slot />
<main class="grid grid-cols-12 sm:grid-cols-1 md:grid-cols-2 h-screen">
  <div class="grid">
    <div class="grid grid-cols-2 row-span-5">
      <div class="grid">
        <div class="bg-blue-400" />
        <div class="bg-teal-400" />
      </div>
      <div class="bg-rose-100" />
    </div>
    <div class="bg-fuchsia-400" />
  </div>

  <div class="grid grid-rows-2">
    <div class="bg-blue-400" />
    <div class="grid grid-cols-2">
      <div class="flex justify-center items-center bg-yellow-100">
        <div class=" flex justify-center items-center">
          <div
            class="bg-[#293462] h-[300px] md:h-[200px] w-[300px] md:w-[200px] flex justify-center items-center"
          >
            <div
              id="circle"
              class="bg-yellow-100 overflow-hidden relative h-[200px] md:h-[100px] w-[200px] md:w-[100px] rounded-full flex justify-center items-center sm:grid-cols-1"
            >
              <div class="right-tri" />
              <div class="left-tri" />
            </div>
          </div>
        </div>
      </div>
      <div class="bg-emerald-400" />
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
  @media screen and (min-width: 768px) {
    .right-tri {
      width: 0;
      height: 0;
      border-bottom: 100px solid #fe5f55;
      border-right: 100px solid transparent;
      border-left: 100px solid transparent;
      position: absolute;
      top: 60px;
      left: -59px;
    }
    .left-tri {
      width: 0;
      height: 0;
      border-bottom: 50px solid #fe5f55;
      border-right: 50px solid transparent;
      border-left: 50px solid transparent;
      position: absolute;
      top: 45px;
      left: 20px;
    }

    @media screen and (max-width: 300) {
    }
  }
</style>
