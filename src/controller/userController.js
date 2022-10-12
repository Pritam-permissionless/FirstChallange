const userModel = require('../models/userSchema')
const jwt = require('jsonwebtoken')

const userDetails = async function(req, res){
    try{
        const userData = await userModel.findOne({userName:req.body.userName, userEmail:req.body.userEmail})
        if(!userData){
            const data = await userModel.create(req.body)
            res.status(200).send({status:true, data: data})
        }else{
            res.status(200).send({status:true, data:userData})
        }
        
    }
    catch(error){
        res.status(400).send({status:false,message:error.message})
    }
}



const userLogin = async function(req,res){
    try{
        const data = req.body
        const {userEmail, password} = data
        const dbData = await userModel.findOne({userEmail: userEmail, password: password})


        if(dbData){const token = jwt.sign({
            userLogin: userEmail,
            iat: Math.floor(Date.now()/1000),
            exp: Math.floor(Date.now()/1000)+(60 * 60)
        }, "this is a key")
        res.setHeader("x-auth-token", token)
        return res.status(200).send({ status: true, message: "User login successfull", data: data })
        }else{
            res.status(400).send({status:false, message:"User not registered. Register first"})
        }
    }catch(error){
        res.status(400).send({status:false, message:error.message})
    }
}

module.exports.userDetails = userDetails
module.exports.userLogin = userLogin
