const bd = require('../configMysql')  //Esconde toda la logica de conectividad a la base de datos

module.exports = {
    //Metodo para el login
    findByUsername: (User, Password, callback) => {
        //retorna el valor de la consulta con la funcion callback
        let sql = 'SELECT * FROM administrador WHERE User=? and Password=? '
        bd.query(sql,[User, Password],(err, data) => {
            if (err) throw err //obtenemos

            if (data.length>0)  //enviamos data
                callback(data[0])
            else
                callback(null)  //enviamos null
        })
    },
}