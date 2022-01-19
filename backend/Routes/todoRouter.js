const router = require("express").Router();
const todoCtrl = require("../Controller/todoCtrl");
const catCtrl = require("../Controller/catCtrl");

router.route("/").post(todoCtrl.createTodo).patch(todoCtrl.editTodo);

router.route("/delete").post(todoCtrl.deleteTodo);

router.route("/get").post(todoCtrl.getTodoList);

router.route("/get_one/:id").post(todoCtrl.getTodoById);

router.route("/cat").post(catCtrl.createCategory);
router.route("/getCat").post(catCtrl.sendCat);
router.route("/get_cat/:id").get(catCtrl.sendCatById);
router.route("/create_cat").post(catCtrl.createCatBasedTodo);
router.route("/getCatById/:id").post(catCtrl.catTodoById);
router.route("/edit_cat_todo/:id").put(catCtrl.editCatTodo);
router.route("/edit_todo_category/:id").post(catCtrl.catTodoById);
router.route("/completeTodo").post(todoCtrl.completeTodo);
router.route("/deleteTodo/:id").post(catCtrl.deleteCatTodo);
router.route("/completeCatTodo").post(catCtrl.finishCatTodo);

module.exports = router;
