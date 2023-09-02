<script>
  import { onMount } from "svelte";
  import Map from "ol/Map.js";
  import OSM from "ol/source/OSM.js";
  import TileLayer from "ol/layer/Tile.js";
  import View from "ol/View.js";
  import VectorLayer from "ol/layer/Vector.js";
  import VectorSource from "ol/source/Vector.js";
  import GeoJSON from "ol/format/GeoJSON.js";

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

    // if (posts && posts.resources && posts.resources.length > 0) {
    //   const geoJSONPath = posts.resources[0].path;
    //   const geoJSONResponse = await fetch(geoJSONPath);
    //   const geoJSONData = await geoJSONResponse.json();

    //   const vectorSource = new VectorSource({
    //     features: new GeoJSON().readFeatures(geoJSONData),
    //   });

    //   const vectorLayer = new VectorLayer({
    //     source: vectorSource,
    //   });

    //   map.addLayer(vectorLayer);
    // }
  });

  const getPost = async () => {
    const res = await fetch("../../store/datapackage.json");
    const data = await res.json();
    console.log("responses", data);
    return data;
  };

  // $: console.log("my name is", posts);
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
