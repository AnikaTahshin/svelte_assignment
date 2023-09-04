<script>
  import { onMount } from "svelte";
  import { setAPIResponses } from "../../store/countryDataStore"; // Import the store
  import Chart from "chart.js/auto";

  let apiData = [];

  onMount(async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const responseData = await response.json();

      setAPIResponses(responseData);

      let res = responseData;
      let filterData = res.sort((a, b) => b.population - a.population);
      apiData = filterData.slice(0, 10);
      let countryLabelList = [];
      let populationList = [];

      apiData.map((el, index) => {
        countryLabelList.push(el?.name?.common);
        populationList.push(el?.population);
      });

      getPolarChart(countryLabelList, populationList);
    } catch (error) {
      console.error("Error", error);
    }
  });

  async function getPolarChart(countryLabelList, populationList) {
    const ctx = document.getElementById("polarAreaChart").getContext("2d");
    new Chart(ctx, {
      type: "polarArea",
      data: {
        labels: countryLabelList,
        datasets: [
          {
            label: countryLabelList,
            data: populationList,
            backgroundColor: [
              "#3292a8",
              "#3257a8",
              "#32a84c",
              "#a8a432",
              "#a84832",
              "#a832a8",
              "#3273a8)",
              "#329da8",
              "#32a86d",
              "#7532a8",
              "#a83251",
              "#8ba832",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        barPercentage: 0.6,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            position: "bottom",
          },
          title: {
            display: true,
            text: "Countries",
            padding: {
              top: 10,
              bottom: 30,
            },
          },
        },
      },
    });
  }

  // data?.languages
  function getCurrency(data) {
    let curr = Object.keys(data?.currencies)[0];

    return data.currencies[curr].name;
  }

  function getLanguage(data) {
    let lang = Object.keys(data?.languages)[0];
    return data.languages[lang];
  }
</script>

<!-- table of 10 top most populated country -->
<div>
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead
      class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    >
      <tr>
        <th scope="col" class="px-6 py-3"> Flag </th>
        <th scope="col" class="px-6 py-3"> Name </th>
        <th scope="col" class="px-6 py-3"> Population </th>
        <th scope="col" class="px-6 py-3"> UN Member Status </th>
        <th scope="col" class="px-6 py-3"> CIOC </th>

        <th scope="col" class="px-6 py-3"> Currencies </th>

        <th scope="col" class="px-6 py-3"> Languages </th>
      </tr>
    </thead>
    <tbody>
      {#each apiData as data}
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center"
        >
          <td class="px-6 py-4">
            <img src={data?.flags?.png} alt="" width="30px" />
          </td>
          <td class="px-6 py-4"> {data?.name?.common} </td>
          <td class="px-6 py-4"> {data?.population} </td>
          <td class="px-6 py-4"> {data?.unMember ? "Yes" : "No"} </td>

          <td class="px-6 py-4"> {data?.cioc} </td>

          <td class="px-6 py-4"> {getCurrency(data)} </td>

          <td class="px-6 py-4">{getLanguage(data)} </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<!-- polar area chart  -->
<div>
  <canvas id="polarAreaChart" width="400" height="400" />
</div>
