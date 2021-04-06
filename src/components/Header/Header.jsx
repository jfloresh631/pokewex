import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import pokeballIcon from "@iconify-icons/tabler/pokeball";
import searchIcon from "@iconify-icons/fluent/search-24-regular";
import "../../styles/header.sass";

export default function Header() {
  return (
    <header className="header">
      <div className="limiter">
        <h1 className="header__logo">
          <InlineIcon icon={pokeballIcon} />
          Pokewex
        </h1>
        <Icon icon={searchIcon} />
      </div>
    </header>
  );
}
