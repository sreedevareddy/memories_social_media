import express from 'express';
import { signin, signup } from '../controllers/users.js';

const router = express.Router();

router.post('/signin', signin);
router.get('/signup', signup);

export default router;