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

const ContentMarca = () => {
  const { date,OnRegister,loading,OnDelete } = UsegetItem("/marca");

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
    }, [item])
    
  const Onregister= async(data)=>{
    await OnRegister(data);
    console.log(data); 
    close();
  }

    return (
      <>
        <h4>Registrar Marca</h4>
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
          <ModalRegister Form={FormRegister} type="edit" edit={row._id} url='/marca' />
          <ButtonDelete onClick={()=>OnDelete(row._id)} ><MdOutlineDelete size={"25px"} /></ButtonDelete>
        </div>
      ),
    },
  ];



  return (
    <Content>
      <ContentTitle>
        <h3>Marcas</h3> <ModalRegister Form={FormRegister}  type="add" />
      </ContentTitle>
      <Table columns={columns} date={date} loading={loading}/>
    </Content>
  );
};

export default ContentMarca;
