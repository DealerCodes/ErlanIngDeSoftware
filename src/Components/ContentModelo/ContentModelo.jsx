import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  ButtonAdd,
  ButtonCancel,
  ButtonDelete,
  Content,
  ContentButton,
  Contentdiv,
  ContentTitle,
  Input,
  Label,
  Statebutton,
  Statebuttontwo,
} from "../ContentMarca/styled";
import ModalRegister from "../Modals/ModalRegister";
import Table from "../Table/Table";
import { MdOutlineDelete } from "react-icons/md";
import UsegetItem from "../../Hooks/UsegetItem";
import Selectcomponent from "../Selectcomponent/Selectcomponent";

const ContentModelo = () => {
  const { date, loading, OnRegister, OnDelete } = UsegetItem("modelo");
  const OnConcat = (obj) => {
    return (
      <>
        {obj.map((item) => (
          <span key={item._id}>{item.nombre},</span>
        ))}
      </>
    );
  };
  
 

  const columns = [
    {
      name: "Id",
      selector: (row) => row._id,
    },

    {
      name: "Modelo",
      selector: (row) => row.nombre,
    },
    {
      name: "Fecha Registrado",
      selector: (row) => row.fecha_creacion,
    },
    {
      name: "Caracteristica",
      selector: (row) => OnConcat(row.caracteristica),
    },
    {
      name: "Estado",
      selector: (row) =>
        row.estado ? (
          <Statebutton>Activo</Statebutton>
        ) : (
          <Statebuttontwo>Inactivo</Statebuttontwo>
        ),
    },
    {
      name: "Acciones",

      minWidth: "200px",
      selector: (row) => (
        <div>
          <ModalRegister
            Form={FormRegister}
            type="edit"
            url="/modelo"
            edit={row._id}
          />
          <ButtonDelete onClick={() => OnDelete(row._id)}>
            <MdOutlineDelete size={"25px"} />
          </ButtonDelete>
        </div>
      ),
    },
  ];

  const FormRegister = ({ close, item }) => {
    const [options, setoptions] = useState([]);
   
    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm();
    useEffect(() => {
      setValue("_id", item._id);
      setValue("nombre", item.nombre);
    }, [item]);

    const Onregister = async (data) => {
      console.log(options)
      let obj={
        _id:data._id,
        nombre:data.nombre,
        caracteristica:options
      }
      await OnRegister(obj);
      close();
    };
    

    return (
      <>
        <h4>Registrar Modelo</h4>
        <form onSubmit={handleSubmit(Onregister)}>
        <input type="hidden"  {...register("_id")} />
          <Contentdiv>
            <Input
              {...register("nombre", { required: true })}
              name="nombre"
              type="text"
              placeholder=" "
            />
            <Label name="nombre">Nombre</Label>
          </Contentdiv>
          <Selectcomponent url={'caracteristica'} setoptions={setoptions} valuedefauld={item.caracteristica} />
          <ContentButton>
            <ButtonCancel type="button" id="ButtonDelete" onClick={close}>
              Cerrar
            </ButtonCancel>
            <ButtonAdd type="submit" id="ButtonAdd">
              Guardar
            </ButtonAdd>
          </ContentButton>
        </form>
      </>
    );
  };
  return (
    <Content>
      <ContentTitle>
        <h3>Modelo</h3> <ModalRegister Form={FormRegister} type="add" />
      </ContentTitle>
      <Table columns={columns} date={date} loading={loading} />
    </Content>
  );
};

export default ContentModelo;
