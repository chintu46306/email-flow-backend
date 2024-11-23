import { Router } from "express";
import { errorHandler } from "../middleware/error.middleware";

const router = Router();

// Define your routes
//router.use("/<route-name>", <route>);

// @ts-ignore
router.use(errorHandler);

export default router;
