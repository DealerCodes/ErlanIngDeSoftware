import { concesionarioAPI } from "../Api/ConcesionariaApi";

export const GetItembyId = async (id, url) => {
  const resp = await concesionarioAPI.get(`http://localhost:4000/api/v2/${url}/${id}`);
  console.log(resp);
  return resp.data;
};

export default GetItembyId;