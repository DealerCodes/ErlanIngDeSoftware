import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import "./styles.css";
import { GetItembyId } from "../../helpers/Edit";
import { concesionarioAPI } from "../../Api/ConcesionariaApi";
const ModalRegister = ({ Form, type,edit,url }) => {
  const [show, setShow] = useState(false);
 const [item, setItem] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const GetItembyid=async (id)=>{
  const resp = await concesionarioAPI.get(`${url}/${id}`);
  setItem(resp.data);
  handleShow();
}

  return (
    <>
      {type == "add" ? (
        <button id="buttomModal" variant="primary" onClick={handleShow} >
          + Agregar
        </button>
      ) : (
        <button id="buttomEdit" variant="primary" onClick={()=>GetItembyid(edit)} >
           <MdOutlineEdit size={"25px"} />
        </button>
      )}

      <Modal id="modalid" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form close={handleClose} item={item} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalRegister;
