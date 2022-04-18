const express = require("express");
const {
    select_all_user_query,
    select_an_user_query,
    delete_user_query,
    insert_user_query,
    update_user_query,
} = require("../../models/querys");
const { user_saved, name_table_user, user_updated, message_delete_not_exist, message_delete_error } = require("../utils/utils");
const router = express.Router();
const mysqlConnection = require("../database.js");
const { operation_delete_By_Id, operation_get_All, operation_get_By_Id,  operation_insert } = require("../../models");
const { stringValidation } = require("../utils/validations");



// GET all User
router.get("/api/user/", async(req, res) => {
    try {
        await operation_get_All(mysqlConnection, select_all_user_query,name_table_user, message_delete_not_exist, res);
    } catch (error) {
        return res.status(400).json({ error: error.toString() });
    }
});

// GET An User
router.get("/api/user/:id", async(req, res) => {
    const { id } = req.params;
    try {
        await operation_get_By_Id(mysqlConnection, select_an_user_query, id,name_table_user, message_delete_not_exist, res);
    } catch (error) {
        return res.status(400).json({ error: error.toString() });
    }
});

// DELETE An User
router.delete("/api/user/delete/:id", async(req, res) => {
    const { id } = req.params;

    try {
        await operation_delete_By_Id(mysqlConnection, delete_user_query, id, res, name_table_user, message_delete_not_exist, message_delete_error)


    } catch (error) {
        return res.status(400).json({ error: error.toString() });

    }

});

// INSERT An user
router.post("/api/user/register", async(req, res) => {

    const info = req.body

    try {
        // await stringValidation(info)

        await operation_insert(mysqlConnection, insert_user_query, info, user_saved, res)


    } catch (error) {
        return res.status(400).json({ error: error.toString() });
    }

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