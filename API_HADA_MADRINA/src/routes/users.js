const express = require("express");

const {
  select_all_user_query,
  select_an_user_query,
  delete_user_query,
  insert_user_query,
  update_user_query,
  select_an_user_query_param,
} = require("../utils/querys");
const {
  user_saved,
  name_table_user,
  user_updated,
  message_delete_not_exist,
  message_delete_error,
  message_update_not_exist,
  message_update_error,
  user_login,
  message_user_bad_credentials,
  user_exist,
} = require("../utils/utils");
const router = express.Router();
const mysqlConnection = require("../database.js");

const {
  operation_delete_By_Id,
  operation_get_All,
  operation_get_By_Id,
  operation_insert,
  operation_update,
  operation_auth,
} = require("../routes/index");
const { stringValidationUser } = require("../utils/validations");

/**
 * Authenticate an user with his/her email and a password
 *
 */
router.post("/api/user/auth", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    await operation_auth(
      mysqlConnection,
      select_an_user_query_param,
      [email, password],
      user_login,
      message_user_bad_credentials,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

router.get("/api/user/auth", async (req, res) => {
  if (req.body.email) {
    res.send({ loggedIn: true, email: req.body.email });
  } else {
    res.send({ loggedIn: false });
  }
});

/**
 * Logout of application
 *
 */
router.get("/api/user/logout", function (req, res) {
  req.session.destroy();
});

/**
 * Get All users
 *
 */
router.get("/api/user/", async (req, res) => {
  try {
    await operation_get_All(
      mysqlConnection,
      select_all_user_query,
      name_table_user,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

/**
 * Get an user by Id
 *
 */
router.get("/api/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await operation_get_By_Id(
      mysqlConnection,
      select_an_user_query,
      id,
      name_table_user,
      message_delete_not_exist,
      res
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

/**
 * Delete an user by Id
 *
 */
router.delete("/api/user/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await operation_delete_By_Id(
      mysqlConnection,
      delete_user_query,
      id,
      res,
      name_table_user,
      message_delete_not_exist,
      message_delete_error
    );
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
});

/**
 * Register an user
 *
 */
router.post("/api/user/register", async (req, res) => {
  const info = req.body;
  const { name, surnames, email, phone, address, password, volunteers_rol } =
    info;

  try {
    /**
     * Validation of user info
     *
     */
    await stringValidationUser(info);
    await operation_insert(
      mysqlConnection,
      insert_user_query,
      [
        [name, surnames, email, phone, address, password, volunteers_rol],
        name,
        surnames,
        email,
        phone,
        address,
        password,
        volunteers_rol,
      ],
      user_saved,
      user_exist,
      res
    );
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});

/**
 * Update an user by Id
 *
 */
router.put("/api/user/update/:id", async (req, res) => {
  const { id } = req.params;
  const update_user_info = req.body;

  try {
    await stringValidationUser(update_user_info);
    await operation_update(
      mysqlConnection,
      update_user_query,
      [update_user_info, id],
      user_updated,
      message_update_not_exist,
      message_update_error,
      res
    );
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});

module.exports = router;
