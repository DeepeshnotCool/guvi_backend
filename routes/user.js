const { check } = require("express-validator");
const { createUser, signin, forgotPassword } = require("../controllers/user");
const { validateUser, validate } = require("../middlewares/validator");
const router = require("express").Router();


router.post("/create", validateUser,validate, createUser);
router.post("/signin", signin);
router.post('/forgot-password', forgotPassword);


module.exports = router;
