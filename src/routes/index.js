const { Router } = require("express")
const router = Router()

const {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
  getHome,
} = require("../controllers/index.controller")

router.get("/", getHome)

router.get("/users", getUsers)

router.get("/users/:id", getUserById)

router.post("/users", createUser)

router.delete("/users/:id", deleteUser)

router.put("/users/:id", updateUser)

module.exports = router
