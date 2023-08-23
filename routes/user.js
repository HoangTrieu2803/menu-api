const router = require("express").Router();
const authController = require("../controller/authController")
//LOGIN
router.post('/login',authController.login)
//SIGNUP
router.post('/signup',authController.signup)
module.exports = router;
