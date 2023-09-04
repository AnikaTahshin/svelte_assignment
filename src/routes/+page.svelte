<script>
  import "../app.css";
</script>

<slot />
<div class="h-screen grid md:grid-cols-2">
  <!-- left side div starts -->
  <div class="grid md:grid-cols-6">
    <div class="row-span-5 col-span-6 grid grid-cols-1 md:grid-cols-6">
      <div class="row-span-5 col-span-2 grid grid-cols-1 md:grid-cols-6">
        <div class="row-span-3 col-span-6 bg-blue-400" />
        <div class="row-span-2 col-span-6 bg-teal-400" />
      </div>
      <div class="row-span-5 col-span-4 bg-rose-100" />
    </div>
    <div class="row-span-1 col-span-6 bg-fuchsia-400" />
  </div>
  <!-- left side div ends -->

  <!-- right side div starts -->

  <div class="grid md:grid-cols-6">
    <div class="col-span-6 row-span-2 bg-blue-400" />
    <div class="col-span-6 row-span-4 grid grid-cols-1 md:grid-cols-6">
      <div class="col-span-4 bg-yellow-100 flex justify-center items-center">
        <div
          class="bg-[#293462] h-[300px] md:h-[300px] w-[300px] md:w-[300px] flex justify-center items-center"
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
      <div class="col-span-2 bg-emerald-400" />
    </div>
  </div>
  <!-- right side div ends -->
</div>

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
  }

  @media screen and (max-width: 300px) {
  }
</style>
