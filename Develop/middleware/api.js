import { Router } from 'express';
import { v4 } from 'uuid';
const router = Router();

import data, { push, some, filter } from '../db/db.json';

router.get('/', (req, res) => res.json(data));

router.post('/', (req, res) => {
    const newTitle = req.body.title;
    const newText = req.body.text;
    if (!newTitle || !newText) {
        res.status(400).json({msg: 'Need non-empty title and text input.'})
    } else {
        const newJSON = {
            id: v4(),
            title: newTitle,
            text: newText
        };
        push(newJSON);
        res.json(data);
    };
});

router.delete('/:id', (req, res) => {
    const found = some(obj => obj.id === req.params.id);
    if (found) {
        data = filter(obj => obj.id !== req.params.id);
        res.json(data);
    } else {
        res.status(400).json(data);
    };
});

export default router;