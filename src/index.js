import express from "express";
import morgan from "morgan";

import { PORT } from "./config.js";
import employeesRoutes from "./routes/employees.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use(employeesRoutes);

// Starting the server
app.listen(PORT);
console.log(`Server on port ${PORT}`);
