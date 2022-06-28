const { error_auth } = require("../utils/utils");

const operation_get_All = (connection, query, name_table,message_delete_not_exist, res) => {
    connection.query(query, (error,results) => {
      
        !error
            ?
            results.length === 0 ?
            res
            .status(400)
            .json({ message: name_table + message_delete_not_exist }) :
            res.status(200).json(results) :
            res.status(400).json({ message: error });
    });
}

const operation_get_By_Id = (connection, query, param, name_table,message_delete_not_exist, res) => {
    connection.query(query, [param], (error, results) => {

        !error
            ?
            results.length === 0 ?
            res
            .status(400)
            .json({ message: name_table + message_delete_not_exist }) :
            res.status(200).json(results) :
            res.status(400).json({ message: error });
    });
}

const operation_delete_By_Id = (connection, query, param, res, name_table, message_delete_not_exist, message_delete_error) => {
     connection.query(query, param, (error, results) => {
        !error
            ?
            results.affectedRows === 0 ?
            res
            .status(400)
            .json({ message: name_table + message_delete_not_exist }) :
            res.status(200).json({ message: name_table + " deleted" }) :
            res.status(400).json({ message: message_delete_error });
    });

}

const operation_insert = (connection, query, param, name_operation,message_not_found, res) => {
      connection.query(query, param, (error, results) => {   
              
        !error ?
        results.affectedRows === 0 ?
            res
            .status(400)
            .json({ message: message_not_found }) :
            res.status(200).json({ message: name_operation }) :
            res.status(400).json({ message: error});

    });
}

const operation_update = (connection, query, param, name_operation,message_not_exist,message_not_update, res) => {

    connection.query(query, param, (error, results) => {
        !error
        ?
        results.affectedRows === 0 ?
        res
        .status(400)
        .json({ message: message_not_exist }) :
        res.status(200).json({ message: name_operation }) :
        res.status(400).json({ message: message_not_update });

    });
}

 

const operation_auth = (connection, query,param, name_table,message_delete_not_exist, res) => {
    connection.query(query, param, (error, results) => {
        
        !error
            ?
            results.length === 0 ?
            res
            .status(400)
            .json({ message: name_table + message_delete_not_exist }) :
            res.status(200).json(results) :
            res.status(400).json({ message: error_auth });
    });
}



module.exports = {
   
    operation_get_All,
    operation_get_By_Id,
    operation_delete_By_Id,
    operation_insert,
    operation_update,
    operation_auth


}