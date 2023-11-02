import { Router } from "express";

import { get, post } from "../controller/index.controller";
import * as config from "../config";

const router = Router();

router.get(config.LANDING_URL, get);
router.post(config.LANDING_URL, post);

export default router;
