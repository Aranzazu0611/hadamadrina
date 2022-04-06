const express = require("express");
const {
  select_a_mother_query,
  select_all_mothers_query,
  insert_mother_query,
  delete_mother_query,
  update_mother_query,
} = require("../../models/querys");
const router = express.Router();

const mysqlConnection = require("../database.js");
const { mother_deleted, mother_saved } = require("../utils/utils.js");

// GET all Mothers //falla
router.get("/api/mothers/", (req, res) => {
  mysqlConnection.query(select_all_mothers_query, (err, rows) => {
    !err ? res.json(rows) : console.log(err);
  });
});

// GET A Mother
router.get("/api/mother/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(select_a_mother_query, [id], (err, rows, fields) => {
    !err ? res.json(rows[0]) : console.log(err);
  });
});

// DELETE A Mother
router.delete("/api/mother/delete/:id", (req, res) => {
  const { id } = req.params;

  mysqlConnection.query(delete_mother_query, [id], (err, rows, fields) => {
    !err ? res.json({ status: mother_deleted }) : console.log(err);
  });
});

// INSERT An mother
router.post("/api/mother/register", (req, res) => {
  const input = JSON.parse(JSON.stringify(req.body));

  var data = {
    name: input.name,
    surnames: input.surnames,
    age: input.age,
    email: input.email,
    phone: input.phone,
    address: input.address,
    nationality: input.nationality,
    mother_birth: input.mother_birth,
    civil_status: input.civil_status,
  };

  mysqlConnection.query(insert_mother_query, [data], (err, rows, fields) => {
    !err ? res.json({ status: mother_saved }) : console.log(err);
  });
});

//UPDATE AN USER  //falla
router.put("/api/mother/edit/:id", (req, res) => {
  const input = JSON.parse(JSON.stringify(req.body));
  const { id } = req.params;

  var data = {
    name: input.name,
    surnames: input.surnames,
    age: input.age,
    email: input.email,
    phone: input.phone,
    address: input.address,
    nationality: input.nationality,
    mother_birth: input.mother_birth,
    civil_status: input.civil_status,
  };
 

  mysqlConnection.query(update_mother_query, [data, id], (err) => {
    !err ? res.json({ status: "Mother Updated" }) : console.log(err);
  });
});

module.exports = router;
