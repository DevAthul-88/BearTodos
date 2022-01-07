const router = require("express").Router();
const userCtrl = require("../Controller/userCtrl");

router
  .route("/")
  .post(userCtrl.createUser)
  .patch(userCtrl.editUser)
  .delete(userCtrl.deleteUser);

  router.route('/login').post(userCtrl.login)
  router.route('/verify').post(userCtrl.verifyUser)

module.exports = router;