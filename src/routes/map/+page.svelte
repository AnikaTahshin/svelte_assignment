<script>
  import { onMount } from "svelte";
  import Map from "ol/Map.js";
  import OSM from "ol/source/OSM.js";
  import TileLayer from "ol/layer/Tile.js";
  import View from "ol/View.js";

  let map;
  let posts = {};

  onMount(async () => {
    map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    posts = await getPost();
  });

  const getPost = async () => {
    const res = await fetch("../../store/datapackage.json");
    const data = await res.json();
    console.log("responses", data);
    return data;
  };
</script>

<div id="map" />

<style lang="postcss">
  :global(body) {
    margin: 0;
    height: 100%;
  }

  #map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
</style>
