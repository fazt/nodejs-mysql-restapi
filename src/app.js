import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

// Settings

// Middlewares
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/api/employees", employeesRoutes);

export default app;
