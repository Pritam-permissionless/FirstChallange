const express = require('express');
const router = express.Router();
const comment = require('../controller/commentController')
const filter = require('../controller/filterController')

const userDetails = require('../controller/userController')
const taskDetails = require('../controller/taskController')



router.post('/comment',comment.comment)

router.get('/filter', filter.filter)


router.post('/userRegister', userDetails.userDetails)
router.post('/login', userDetails.userLogin)
router.post('/task', taskDetails.taskDetails)



module.exports = router