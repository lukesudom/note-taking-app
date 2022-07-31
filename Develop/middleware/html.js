import fs from 'fs';
import { join } from 'path';

import { Router } from 'express';
const router = Router();

const getPath = (name) => join(__dirname, '..', 'public', `${name}.html`);

router.get('/notes', (req, res) => {
    res.sendFile(getPath("notes"));
});

router.get('*', (req, res) => {
    res.sendFile(getPath("index"));
});

export default router;