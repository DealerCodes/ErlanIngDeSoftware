import axios from "axios";

export const concesionarioAPI=axios.create({
    baseURL:"http://localhost:4000/api/v2"
});