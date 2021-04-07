import React, { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon.jsx";
import "../../styles/poke_container.sass";

export default function PokeContainer() {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0";

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getData = async (url) => {
      const res = await fetch(url);
      const data = await res.json();

      // Get each pokemon data
      data.results.forEach(async (element) => {
        const res = await fetch(element.url);
        const data = await res.json();

        let output = {
          // Add zeros to left position
          id: data.id.toString().padStart(3, "0"),
          sprite: data.sprites.front_default,
          specie: data.species.name,
        };

        // Set pokemon hook state
        setPokemon((pokemon) => [...pokemon, output]);
      });
    };

    getData(url);
  }, []);

  return (
    <main className="main">
      <div className="limiter">
        {/* Validate if pokemon size is zero */}
        {pokemon.length === 0 ? (
          // Render loading message
          <span className="loader">Cargando...</span>
        ) : (
          pokemon.map((element) => (
            // Render Pokemon component
            <Pokemon
              key={element.id}
              id={element.id}
              specie={element.specie}
              sprite={element.sprite}
            />
          ))
        )}
      </div>
    </main>
  );
}
