const express = require('express');
const { Routes } = require('react-router-dom');
const router = express.Router();
const login = require('../controller/authController')
const storageController = require('../controller/storageController')
const middleware = require('../middleware/middleware')

router.put('/updateinfo',middleware.loggedIn, login.updateuser)
router.delete('/deleteinfo',middleware.loggedIn, login.deleteuser)
router.post('/uploadimage',middleware.loggedIn,storageController.upload, login.uploadimage)
router.post('/signup', login.signup)
router.post('/login', login.login)
router.delete('/logout',middleware.loggedIn, login.logout)
// router.post('/postimage', storageController.upload, storageController.postimg)
// router.get('/getimage', storageController.getimages)
// router.delete('/delimage', storageController.deleteimages)

module.exports = router