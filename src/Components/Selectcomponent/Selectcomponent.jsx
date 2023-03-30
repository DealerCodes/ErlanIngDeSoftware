import React, { useEffect, useState } from "react";
import Select from "react-select";
import { concesionarioAPI } from "../../Api/ConcesionariaApi";

const Selectcomponent = ({ url,setoptions,valuedefauld=[] }) => {
  const [data, setData] = useState(valuedefauld);
  useEffect(() => {
    onAddOptions();
    if (valuedefauld.length > 0) {
      let obj = [];
      valuedefauld.map((element) => { 
       obj.push(element._id);
         });
          setoptions(obj);
    }
  }, []);

  const onAddOptions = async () => {
    const object = await concesionarioAPI.get(url);
    let p = object.data.map((options) => {
      let obj = {};
      obj["value"] = options._id;
      obj["label"] = options.nombre;
      return obj;
    });
    setData(p);
    
  };
  
  const onSelectItem =  (item) => {
    let obj = [];
   item.map((element) => { 
    obj.push(element.value);
      });
       setoptions(obj);
  }
  const Onuploadoption=()=>{
   let o= valuedefauld.map(item => {
      return{
        label: item.nombre,
        value: item._id
      }
  
     })
    return o
  }
  return (
    <Select
    defaultValue={
      Onuploadoption()
    }
    styles={{
      option: (styles, state) => ({
        ...styles,
        color: state.isSelected ? "#FFF" : styles.color,
        backgroundColor: state.isSelected ? "#F3969A" : styles.color,
        fontWeight: 300,
        borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
        "&:hover": {
          color: "#FFF",
          backgroundColor: "#058C42",
        },
      }),
      control: (styles, state) => ({
        ...styles,
        minHeight: '50px',
        
        boxShadow: state.isFocused ? "0 0 0 1px #058C42" : 0,
        borderColor: state.isFocused ? "#058C42" : "#CED4DA",
        "&:hover": {
          borderColor: state.isFocused ? "#058C42" : "#CED4DA",
        },
      }),
    }}
      options={data}
      isMulti
      name="colors"
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={(item) => onSelectItem(item)}
    />
  );
};

export default Selectcomponent;
