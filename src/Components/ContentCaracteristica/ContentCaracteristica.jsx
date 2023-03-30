import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ModalRegister from "../Modals/ModalRegister";
import Table from "../Table/Table";
import { MdOutlineDelete } from "react-icons/md";
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
} from "./styled";
import UsegetItem from "../../Hooks/UsegetItem";

const ContentCaracteristica = () => {
  const { date,OnRegister,loading,OnDelete } = UsegetItem("/caracteristica");

  const FormRegister = ({ close,item }) => {
  
    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm();

    useEffect(() => {
      setValue("_id", item._id);
      setValue("nombre", item.nombre);
      setValue("descripcion", item.descripcion);
    }, [item])
    
  const Onregister= async(data)=>{
    await OnRegister(data);
    console.log(data)
    close();
  }

    return (
      <>
        <h4>Registrar Caracteristica</h4>
        <form onSubmit={handleSubmit(Onregister)}>
          <input type="hidden"  {...register("nombre")} />
          <Contentdiv>
            <Input
              {...register("nombre", { required: true })}
              name="nombre"
              type="text"
              placeholder=" "
            />
            <Label name="nombre">Nombre</Label>
            </Contentdiv>
            <Contentdiv>
            <Input
              {...register("descripcion", { required: true })}
              name="descripcion"
              type="text"
              placeholder=" "
            />
            <Label name="descripcion">Descripcion</Label>
          </Contentdiv>
          <ContentButton>
            <ButtonCancel type="button" id="ButtonDelete" onClick={close}>
              Cerrar
            </ButtonCancel>
            <ButtonAdd type="submit" id="ButtonAdd" >
              Guardar
            </ButtonAdd>
          </ContentButton>
        </form>
      </>
    );
  };


  const columns = [
    {
      name: "Id",
      selector: (row) => row._id,
    },

    {
      name: "Nombre",
      selector: (row) => row.nombre,
    },
    {
        name: "Descripcion",
        selector: (row) => row.descripcion,
      },
    {
      name: "Fecha Registrado",
      selector: (row) => row.fecha_creacion,
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
          <ModalRegister Form={FormRegister} type="edit" edit={row._id} url='/caracteristica' />
          <ButtonDelete onClick={()=>OnDelete(row._id)} ><MdOutlineDelete size={"25px"} /></ButtonDelete>
        </div>
      ),
    },
  ];



  return (
    <Content>
      <ContentTitle>
        <h3>Caracteristicas</h3> <ModalRegister Form={FormRegister}  type="add" />
      </ContentTitle>
  {/*     vista de la tabla */}
      <Table columns={columns} date={date} loading={loading}/>
    </Content>
  );
};

export default ContentCaracteristica;
