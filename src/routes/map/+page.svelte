<script>
  import { onMount } from "svelte";
  import Map from "ol/Map.js";
  import OSM from "ol/source/OSM.js";
  import TileLayer from "ol/layer/Tile.js";
  import View from "ol/View.js";

  let map;

  onMount(() => {
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
  });
</script>

layer.setStyle(color: "#006a4e", opacity: 0.75,)
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
