const { getALL, getByID } = require("../models/index")



const getAllUser = getALL;
const getUserByID = getByID;




module.exports = {     
    getAllUser,
    getUserByID
  }