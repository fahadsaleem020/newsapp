const url = "https://jsonplaceholder.typicode.com/users";
const axios = require("axios").default;

const getUsers = async () => {
  try {
    let data = await (await axios.get(url)).data;
    return data;
  } catch (error) {
    return null;
  }
};

module.exports = getUsers;
