const taskModel = require('../models/taskSchema')
const jwt = require('jsonwebtoken')

const taskDetails = async function(req,res){
    try{
        const token = req.headers['x-auth-token']
        if(!token){
            res.status(400).send({status:false, data:'Token not present'})
        }else{         
            jwt.verify(token, "this is a key", (error, decodedToken)=>{
                if(error){
                    return res.status(400).send({status:false, message:"token invalid"})
                }else{
                const exp = decodedToken.exp
                const iatNow = Math.floor(Date.now()/1000)
                if(exp<iatNow){
                    return res.status(401).send({status:false, message:"session expired, please login again."})
                }
                }
                const data = req.body
            res.status(200).send({status:true, data: data})
            })
            
        }
        
    }catch(error){
        res.status(400).send({status:false, message:error.message})
    }
}


module.exports.taskDetails = taskDetails