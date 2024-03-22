import React from "react";

function Map() {
  return (
    <gmp-map
      center="44.09737014770508,3.09779953956604"
      zoom="14"
      map-id="DEMO_MAP_ID"
    >
      <gmp-advanced-marker
        position="44.09737014770508,3.09779953956604"
        title="My location"
      ></gmp-advanced-marker>
    </gmp-map>
  );
}

export default Map;
