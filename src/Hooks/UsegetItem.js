import React, { useEffect, useState } from "react";
import { concesionarioAPI } from "../Api/ConcesionariaApi.jsx";


const UsegetItem = (url) => {
  const [date, setDate] = useState([]);
   const [loading, setLoading] = useState(true);
  useEffect(() => {
    OnGetItem();
  }, []);

  const OnGetItem = async () => {
    setLoading(true);
    const data = await concesionarioAPI.get(url);
    console.log(data.data);
    setDate(data.data);
    setLoading(false);

  };



  const OnRegister = async (data) => {
    console.log(data);
    if (data._id) {
      const resp = await concesionarioAPI.patch(url, data);
    }
    else{
      const resp = await concesionarioAPI.post(url, data);
    }
   
    console.log(data)
  //  await Registerdate(data,url);
    OnGetItem();

  }
  const OnDelete = async (id) => {
    const resp = await concesionarioAPI.delete(`${url}/${id}`);
    // console.log(resp);
    OnGetItem();

  }



  return {
    loading,
    date,
    OnRegister,
    OnDelete
  };
};

export default UsegetItem;
