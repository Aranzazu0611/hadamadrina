const operation_Database = (connection, query, operation, name_database) => {

    connection.query(query, (error) => {
        (error) ? console.log('error: ' + error.message): console.log(operation + name_database);
        
    });
    
    
};

const operation_get_All = (connection, query, name_table,message_delete_not_exist, res) => {
    connection.query(query, (error, results) => {
        
        !error
            ?
            results.length === 0 ?
            res
            .status(400)
            .json({ message: name_table + message_delete_not_exist }) :
            res.status(200).json(results) :
            res.status(400).json({ message: "Error" });
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
            res.status(400).json({ message: "Error" });
    });
}

const operation_delete_By_Id = async (connection, query, param, res, name_table, message_delete_not_exist, message_delete_error) => {
    await connection.query(query, param, (error, results) => {
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
        console.log(error)
        !error ?
            results.length === 0 ?
            res
            .status(400)
            .json({ message: message_not_found }) :
            res.status(200).json({ message: name_operation }) :
            res.status(400).json({ message: error.message });

    });
}




module.exports = {
    operation_Database,
    operation_get_All,
    operation_get_By_Id,
    operation_delete_By_Id,
    operation_insert


}