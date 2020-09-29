const router = require('express').Router();

const users = require('../controllers/users');

router.get("/getUsers", users.getUsers);
router.post("/createUser", users.createUser);
router.put("/updateUser", users.updateUser);
router.delete("/deleteUser", users.deleteUser);

module.exports = router;