import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

// GET all Employees
router.get("/", getEmployees);

// GET An Employee
router.get("/:id", getEmployee);

// DELETE An Employee
router.delete("/:id", deleteEmployee);

// INSERT An Employee
router.post("/", createEmployee);

router.put("/:id", updateEmployee);

export default router;
