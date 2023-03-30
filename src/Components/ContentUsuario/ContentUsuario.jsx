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

const ContentUsuario = () => {
    const { date, OnRegister, loading, OnDelete } = UsegetItem("/usuario");

    const FormRegister = ({ close, item }) => {

        const {
            register,
            handleSubmit,
            setValue,
            formState: { errors },
        } = useForm();

        useEffect(() => {
            setValue("_id", item._id);
            setValue("nombre", item.nombre);
            setValue("apellido", item.apellido);
            setValue("direccion", item.direccion);
            setValue("telefono", item.telefono);
            setValue("correo", item.correo);
            setValue("contraseña", item.contraseña);
            setValue("rol", item.rol);
        }, [item])

        const Onregister = async (data) => {
            await OnRegister(data);
            console.log(data)
            close();
        }

        return (
            <>
                <h4>Registrar Usuario</h4>
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
                    <Contentdiv>
                        <Input
                            {...register("apelldio", { required: true })}
                            name="apelldio"
                            type="text"
                            placeholder=" "
                        />
                        <Label name="apellido">Apellido</Label>
                    </Contentdiv>

                    <Contentdiv>
                        <Input
                            {...register("direccion", { required: true })}
                            name="direccion"
                            type="text"
                            placeholder=" "
                        />
                        <Label name="direccion">Direccion</Label>
                    </Contentdiv>

                    <Contentdiv>
                        <Input
                            {...register("telefono", { required: true })}
                            name="telefono"
                            type="number"
                            placeholder=" "
                        />
                        <Label name="telefono">Telefono</Label>
                    </Contentdiv>

                    <Contentdiv>
                        <Input
                            {...register("correo", { required: true })}
                            name="correo"
                            type="email"
                            placeholder=" "
                        />
                        <Label name="correo">Correo</Label>
                    </Contentdiv>

                    <Contentdiv>
                        <Input
                            {...register("contraseña", { required: true })}
                            name="contraseña"
                            type="password"
                            placeholder=" "
                        />
                        <Label name="contraseña">Contraaseña</Label>
                    </Contentdiv>

                    <Contentdiv>
                        <Input
                            {...register("rol", { required: true })}
                            name="rol"
                            type="text"
                            placeholder=" "
                        />
                        <Label name="rol">Rol</Label>
                    </Contentdiv>

                    <ContentButton>
                        {<ButtonCancel type="button" id="ButtonDelete" onClick={close}>
                            Cerrar
                        </ButtonCancel> }
                      {<ButtonAdd type="submit" id="ButtonAdd" >
                            Guardar
                        </ButtonAdd> }
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
            name: "Apellido",
            selector: (row) => row.apellido,
        },
        {
            name: "Direccion",
            selector: (row) => row.direccion,
        },
        {
            name: "Telefono",
            selector: (row) => row.telefono,
        },
        {
            name: "Correo",
            selector: (row) => row.correo,
        },
        {
            name: "Fecha Registrado",
            selector: (row) => row.fecha_creacion,
        },
        {
            name: "Contraseña",
            selector: (row) => row.contraseña,
        },
        {
            name: "Rol",
            selector: (row) => row.rol,
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
                    <ModalRegister Form={FormRegister} type="edit" edit={row._id} url='/usuario' />
                    <ButtonDelete onClick={() => OnDelete(row._id)} ><MdOutlineDelete size={"25px"} /></ButtonDelete>
                </div>
            ),
        },
    ];



    return (
        <Content>
            <ContentTitle>
                <h3>Usuarios</h3> <ModalRegister Form={FormRegister} type="add" />
            </ContentTitle>
            {/*     vista de la tabla */}
            <Table columns={columns} date={date} loading={loading} />
        </Content>
    );
};

export default ContentUsuario;
