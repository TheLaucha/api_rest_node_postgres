const { Pool } = require("pg")

const pool = new Pool({
  host: "postgresql.lautaro-espinillo-dev.svc.cluster.local",
  user: "postgres",
  password: "r00t",
  database: "firstapi",
  port: "5432",
})

const getUsers = async (req, res) => {
  const response = await pool.query("SELECT * FROM users")
  console.log(response.rows)
  res.status(200).json(response.rows)
}

const getUserById = async (req, res) => {
  const { id } = req.params
  const response = await pool.query("SELECT * FROM users WHERE id=$1", [id])
  res.status(200).json(response.rows)
}

const createUser = async (req, res) => {
  const { name, email } = req.body
  const response = await pool.query(`INSERT INTO users (name,email) VALUES ($1,$2)`, [name, email])
  res.status(200).json({
    message: "User Added Succesfully",
    body: {
      user: { name, email },
    },
  })
}

const deleteUser = async (req, res) => {
  const { id } = req.params
  const response = await pool.query("DELETE FROM users WHERE id=$1", [id])
  res.json(`User ${id} deleted successfully`)
}

const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, email } = req.body
  const response = await pool.query("UPDATE users SET name=$1, email=$2 WHERE id=$3", [
    name,
    email,
    id,
  ])
  res.status(200).json({
    message: "User updated successfully",
    body: {
      user: { name, email },
    },
  })
}

module.exports = {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
}
