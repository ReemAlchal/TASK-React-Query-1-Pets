import axios from "axios";

export default function list() {
  return axios.get("http://localhost:8000/pets");
}

export function adopt(id) {
  return axios.put("http://localhost:8000/pets/" + id, {
    adopted: true,
  });
}
