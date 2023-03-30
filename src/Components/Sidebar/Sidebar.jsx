import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState } from "react";
import "./styled.css";
import { NavLink } from "react-router-dom";
import { BsTools } from "react-icons/bs";
import { MdModelTraining,MdOutlineShoppingCart } from "react-icons/md";
import { TbBrandUnity, TbBrandDenodo } from "react-icons/tb";
import { IoCarSportOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
const Sidebar = ({ view, show, setView, handleClose }) => {
  const body = document.getElementsByTagName("body")[0];
  let resizeObserver = new ResizeObserver(() => {
    if (window.innerWidth < 1050) {
      setView(true);
    } else {
      setView(false);
    }
  });
  resizeObserver.observe(body);

  const itemLink = [
    {
      id: 1,
      path: "marca",
      name: "Marca",
      icon: <TbBrandUnity size={"28px"} />,
    },
    {
      id: 2,
      path: "modelo",
      name: "Modelo",
      icon: <MdModelTraining size={"28px"} />,
    },
    {
      id: 3,
      path: "caracteristica",
      name: "Caracteristica",
      icon: <TbBrandDenodo size={"28px"} />,
    },
    {
      id: 4,
      path: "vehiculo",
      name: "Vehiculo",
      icon: <IoCarSportOutline size={"28px"} />,
    },

  ];
  return (
    <>
      <Offcanvas
        id="canvasId"
        show={show}
        backdrop={view}
        scroll={true}
        onHide={handleClose}
      >
        <Offcanvas.Header>
          <Offcanvas.Title><h4>Panel de Administracion</h4> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="content-profile">
            <img src="../../../assets/perfil.jpg" alt="" />
            <h5>Juan Perez</h5>
            <h6>juanperez@gmail.com</h6>
          </div>

          <div className="content-links">
            <p>General</p>
            {itemLink.map((item) => (
              <NavLink key={item.id} to={item.path}>
                {item.icon} <span>{item.name}</span>{" "}
              </NavLink>
            ))}
            <p>Usuarios </p>
            <NavLink to="usuario">
              <AiOutlineUser size={"28px"} /> <span>Usuario</span>{" "}
            </NavLink>
            <p>Venta</p>
            <NavLink to="venta">
              <MdOutlineShoppingCart size={"28px"} /> <span>Reserva</span>
            </NavLink>
            <NavLink to="venta">
              <BiShoppingBag size={"28px"} /> <span>Venta</span>
            </NavLink>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
