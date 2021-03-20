// Below is source code from a project I did involving a database for magicians to store their tricks.

//First I made a file called 'api-connection' and put the back end information in:
//Then I used axios to make the fetch calls
import axios from "axios";

export default axios.create({
  baseURL: "https://rocky-caverns-41537.herokuapp.com/api",

  headers: {
    "Content-type": "application/json",
  },
});

//I made a seperate file that contained all of my fetch calls

import http from "./api-connection";

const getAll = () => {
  return http.get("/magic");
};

const get = (id) => {
  return http.get(`/magic/${id}`);
};

const create = (data) => {
  return http.post("/magic", data);
};

const update = (id, data) => {
  return http.put(`/magic/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/magic/${id}`);
};

const findByTitle = (title) => {
  return http.get(`/magic?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByTitle,
};

//Then I just referenced the 'MagicData' file instead of writing out fetch calls for each file:
const getMagic = (id) => {
  MagicData.get(id)
    .then((res) => {
      setCurrentMagic(res.data);
      console.log(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
};
