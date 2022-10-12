const express = require('express');
const router = express.Router();
const comment = require('../controller/commentController')





router.get('/getThings',function(req, res){   
    res.send({message:'hello'})      ///example route
//     res.send(req.body)
})


router.post('/comment',comment.comment)



module.exports = router