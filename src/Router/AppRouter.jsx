import React from "react";
import { Route, Routes } from "react-router-dom";
import Marca from "../Pages/Marca";
import Modelo from "../Pages/Modelo";
import Caracteristica from "../Pages/Caracteristica";
import Vehiculo from "../Pages/Vehiculo";
import Usuario from "../Pages/Usuario";
import Venta from "../Pages/Venta";
import Reserva from "../Pages/Reserva";
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="marca" element={<Marca />} />
        <Route path="modelo" element={<Modelo />} />
        <Route path="caracteristica" element={<Caracteristica />} />
        <Route path="vehiculo" element={<Vehiculo />} />
        <Route path="usuario" element={<Usuario />} />
        <Route path="venta" element={<Venta />} />
        <Route path="reserva" element={<Reserva />} />
        <Route path="/" element={<Marca />} />
      </Routes>
    </>
  );
};

export default AppRouter;
