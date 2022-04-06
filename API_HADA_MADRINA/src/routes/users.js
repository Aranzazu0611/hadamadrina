const express = require("express");
const {
  select_all_user_query,
  select_an_user_query,
  delete_user_query,
  insert_user_query,
  update_user_query,
} = require("../../models/querys");
const { user_deleted, user_saved, user_updated } = require("../utils/utils");
const router = express.Router();
const mysqlConnection = require("../database.js");
const { getAllUser, getUserByID } = require("../Logic");

// GET all User
router.get("/api/user/", async (req, res) => {
  try {
    await getAllUser(mysqlConnection, select_all_user_query, res);
  } catch (error) {
    res.send("Ocurrio un error: " + error.message);
  }
});

// GET An User
router.get("/api/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await getUserByID(mysqlConnection, select_an_user_query, id, res);
  } catch (error) {
    res.send("Ocurrio un error: " + error.message);
  }
});

// DELETE An User
router.delete("/api/user/delete/:id", (req, res) => {
  const { id } = req.params;

  mysqlConnection.query(delete_user_query, [id], (err) => {
    !err
      ? res.status(200).json({ status: user_deleted })
      : res.status(400).json({ status: "failed", message: "User no exist" });
  });
});

// INSERT An user
router.post("/api/user/register", (req, res) => {
  const userInfo = req.body;
  const { name, email } = userInfo;
  req.checkBody("email", "Email is not valid").isEmpty;
  req
    .checkBody("password", "Password must be at least 6 characters long")
    .len(6);

  //   if (email == " " || !email) {
  //     return res.status(400).json({ status: 'failed', message: 'Email is required.' });
  // }
  // if (name == " " || !name) {
  //     return res.status(400).json({ status: 'failed', message: 'Name is required.' });
  // }

  mysqlConnection.query(insert_user_query, userInfo, (err) => {
    !err ? res.json({ status: user_saved }) : console.log(err);
  });
});

//UPDATE AN USER
router.put("/api/user/update/:id", (req, res) => {
  const { id } = req.params;

  const update_user_info = req.body;

  mysqlConnection.query(update_user_query, [update_user_info, id], (err) => {
    !err ? res.json({ status: user_updated }) : console.log(err);
  });
});

module.exports = router;
