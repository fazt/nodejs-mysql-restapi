import { pool } from "../database.js";

export const getEmployees = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM employee");
  res.json(rows);
};

export const getEmployee = async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);

  if (rows.length <= 0) {
    return res.status(404).json({ message: "Employee not found" });
  }

  res.json(rows[0]);
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query("DELETE FROM employee WHERE id = ?", [id]);

  if (rows.affectedRows <= 0) {
    return res.status(404).json({ message: "Employee not found" });
  }

  res.sendStatus(204);
};

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO employee (name, salary) VALUES (?, ?)",
    [name, salary]
  );
  res.status(201).json({ id: rows.insertId, name, salary });
};

export const updateEmployee = async (req, res) => {
  const { name, salary } = req.body;
  const { id } = req.params;
  const query = `
    SET @id = ?;
    SET @name = ?;
    SET @salary = ?;
    CALL employeeAddOrEdit(@id, @name, @salary);
  `;
  mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
    if (!err) {
      res.json({ status: "Employee Updated" });
    } else {
      console.log(err);
    }
  });
};
