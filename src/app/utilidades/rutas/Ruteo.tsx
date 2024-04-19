import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

import { PeliculaAdmin } from "../../componentes/peliculas/PeliculaAdmin";
import { PeliculaCrear } from "../../componentes/peliculas/PeliculaCrear";
import { PeliculaListar } from "../../componentes/peliculas/PeliculaListar";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/PeliAdm" element={<PeliculaAdmin />} />
      <Route path="/PeliCrear" element={<PeliculaCrear />} />
      <Route path="/PeliList" element={<PeliculaListar />} />

      <Route path="/acer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
