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
      let bpiData = res.sort((a, b) => b.population - a.population);
      apiData = bpiData.slice(0, 10);
      let countryLabelList = [];
      let populationList = [];

      apiData.map((el, index) => {
        countryLabelList.push(el?.name?.common);
        populationList.push(el?.population);
      });
      getPolarChart(countryLabelList, populationList);
    } catch (error) {
      console.error("Error fetching API data:", error);
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
  function checkCurrency(data) {
    let curr = Object.keys(data?.currencies)[0];
    return data.currencies[curr].name;
  }

  function getLanguage(data) {
    let lang = Object.keys(data?.languages)[0];
    return data.languages[lang];
    // console.log("lang", lang);
  }
</script>

<div class="flex-row">
  <div>
    <table class="table-auto">
      <thead>
        <tr>
          <th>Flag</th>
          <th>Name</th>
          <th>Population</th>
          <th>UN Member Status</th>
          <th>CIOC</th>
          <th>Currencies</th>
          <th>Languages</th>
        </tr>
      </thead>

      <tbody>
        {#each apiData as data}
          <tr>
            <td><img src={data?.flags?.png} alt="" width="30px" /></td>
            <td>{data?.name?.common}</td>
            <td>{data?.population}</td>
            <td>{data?.unMember ? "Yes" : "No"}</td>
            <td>{data?.cioc}</td>
            <td>{checkCurrency(data)}</td>
            <td>{getLanguage(data)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    <!-- <Line
    data={apiData}
    width={100}
    height={50}
    options={{ maintainAspectRatio: false }}
  /> -->
  </div>
  <div>
    <canvas id="polarAreaChart" width="400" height="400" />
  </div>
</div>
