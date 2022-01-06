const router = require("express").Router();
const userCtrl = require("../Controller/userCtrl");

router
  .route("/")
  .get(userCtrl.getUser)
  .post(userCtrl.createUser)
  .patch(userCtrl.editUser)
  .delete(userCtrl.deleteUser);


module.exports = router;