const userModel = require('../models/userSchema')

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

module.exports.userDetails = userDetails