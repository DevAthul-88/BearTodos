const router = require("express").Router();
const userCtrl = require("../Controller/userCtrl");

router
  .route("/")
  .post(userCtrl.createUser)
  .put(userCtrl.editUser)
  .delete(userCtrl.deleteUser);

  router.route('/login').post(userCtrl.login)
  router.route('/verify').get(userCtrl.verifyUser)

module.exports = router;