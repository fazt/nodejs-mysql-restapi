import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.json({ message: "welcome to my api" }));

export default router;
