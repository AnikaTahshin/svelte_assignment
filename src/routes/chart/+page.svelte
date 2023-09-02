<script>
  import { onMount } from "svelte";
  import { setAPIResponses } from "../../store/countryDataStore"; // Import the store

  let apiData = [];

  onMount(async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const responseData = await response.json();

      setAPIResponses(responseData);

      apiData = responseData.slice(0, 10);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  });

  $: console.log("apiData", apiData);
</script>

<!-- Your component's HTML -->
<div>
  <table class="table-auto">
    <thead>
      <tr>
        <th>Flag</th>
        <th>Name</th>
        <th>Population</th>
        <th>UN Member Status</th>
        <th>CIOC</th>
        <!-- <th>Currencies</th> -->
        <!-- <th>Languages</th> -->
      </tr>
    </thead>

    <tbody>
      {#each apiData as data}
        <tr>
          <td><img src={data?.flags?.png} alt="" width="30px" /></td>
          <td>{data?.name?.common}</td>
          <td>{data?.population}</td>
          <td>{data?.unMember}</td>
          <td>{data?.cioc}</td>
          <!-- <td>{data?.currencies?.MRU?.name}</td> -->
          <!-- <td>{data?.languages}</td> -->
        </tr>
      {/each}
    </tbody>
  </table>
</div>
