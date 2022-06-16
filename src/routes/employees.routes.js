import express from "express";
import { pool } from "../database.js";

const router = express.Router();

// GET all Employees
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query(`SELECT * FROM Employee`);
    res.json(rows);
  } catch (error) {
    return res.json({ message: error.message });
  }
});

// GET An Employee
router.get("/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "SELECT * FROM employee WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
});

// DELETE An Employee
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "DELETE FROM employee WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Employee Deleted" });
      } else {
        console.log(err);
      }
    }
  );
});

// INSERT An Employee
router.post("/", (req, res) => {
  const { id, name, salary } = req.body;
  console.log(id, name, salary);
  const query = `
    SET @id = ?;
    SET @name = ?;
    SET @salary = ?;
    CALL employeeAddOrEdit(@id, @name, @salary);
  `;
  pool.query(query, [id, name, salary], (err, rows, fields) => {
    if (!err) {
      res.json({ status: "Employeed Saved" });
    } else {
      console.log(err);
    }
  });
});

router.put("/:id", (req, res) => {
  const { name, salary } = req.body;
  const { id } = req.params;
  const query = `
    SET @id = ?;
    SET @name = ?;
    SET @salary = ?;
    CALL employeeAddOrEdit(@id, @name, @salary);
  `;
  pool.query(query, [id, name, salary], (err, rows, fields) => {
    if (!err) {
      res.json({ status: "Employee Updated" });
    } else {
      console.log(err);
    }
  });
});

export default router;
