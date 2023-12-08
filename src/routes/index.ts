import { Router } from 'express';

import { get } from '../controller/index.controller';
import { uploadImage } from '../controller/image.controller';
import * as config from '../config';
import multer from 'multer';

const router = Router();

const upload = multer();

router.get(config.LANDING_URL, get);
router.post('/upload', upload.single('image'), uploadImage);

export default router;
