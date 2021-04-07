import React from "react";
import "../../styles/pokemon.sass";

export default function Pokemon({ id, specie, sprite }) {
  return (
    <figure className="pokemon">
      <img src={sprite} alt={specie} className="pokemon__sprite" />
      <figcaption className="pokemon__specie">{specie}</figcaption>
      <span className="pokemon__id">#{id}</span>
    </figure>
  );
}
