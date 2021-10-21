const userDAO = require('../models/usersDAO')


//  request, response
const userValidate = (req, res) => {
    //peticion get metodo que sirve para el login
    let User= req.body.User
    let Password = req.body.Password

    userDAO.findByUsername(req.params.User,req.params.Password,(data)=>{
        //Metodo callback retorma el valor del modelo UserDAO

        try{
            if(!data)throw new Err("Ups, algo salio mal. Si usted no tiene una cuenta cree una nueva")
            console.log('Data===>', data)
            res.send({  //Enviamos response
                status: true,
                message:'Inicio de sesion correcta'
            })
        }catch (Err){
            res.send({ //Enviamos response
                status:false,
                message:'Datos incorrectos, revise correctamente sus datos'
            })
        }
    })
}

const  signup = (req,res)=>{

}

module.exports = {
    userValidate,
    signup
}